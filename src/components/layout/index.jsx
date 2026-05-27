import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Treatments from '../treatments'
import Health from '../health'
import Contact from '../contact'
import './index.scss'
import Sidebar from '../sidebar'
import Assistence from '../assistance'

const SECTIONS = [
    { path: '/',           id: 'home',       Component: Home       },
    { path: '/about',      id: 'about',      Component: About      },
    { path: '/treatments', id: 'treatments', Component: Treatments },
    //{ path: '/health',     id: 'health',     Component: Health     },
    { path: '/assistance', id: 'assistance', Component: Assistence },
    { path: '/contact',    id: 'contact',    Component: Contact    },
]

export default function Layout() {
    const navigate     = useNavigate()
    const location     = useLocation()
    const sectionRefs  = useRef({})
    const isScrollingTo = useRef(false)

    // 1. URL muda → rola até a seção
    useEffect(() => {
        const section = SECTIONS.find(s => s.path === location.pathname)
        if (!section) return

        const el = sectionRefs.current[section.id]
        if (!el) return

        isScrollingTo.current = true

        try {
            const top = el.getBoundingClientRect().top + window.scrollY - 70
            window.scrollTo({ top, behavior: 'smooth' })
        } catch (err) {
            console.warn('scrollTo failed:', err)
            isScrollingTo.current = false
            return
        }
        
        const timer = setTimeout(() => { isScrollingTo.current = false }, 800)
        return () => clearTimeout(timer)
    }, [location.pathname])

    // 2. Scroll → atualiza URL
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrollingTo.current) return

                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (!visible) return

                const section = SECTIONS.find(s => s.id === visible.target.id)
                if (section && location.pathname !== section.path) {
                    navigate(section.path, { replace: true })
                }
            },
            {
                root: null,                        // ✅ viewport do browser
                rootMargin: '-40% 0px -40% 0px',
                threshold: [0, 0.1, 0.2, 0.5],
            }
        )

        SECTIONS.forEach(({ id }) => {
            const el = sectionRefs.current[id]
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [navigate])

    return (
        <div className="page">  {/* ✅ sem ref, sem scroll próprio */}
            <Sidebar />
            <div className="container">
                {SECTIONS.map(({ id, Component }) => (
                    <section
                        key={id}
                        id={id}
                        ref={el => { sectionRefs.current[id] = el }}
                        className={`${id}-page`}
                    >
                        <Component />
                    </section>
                ))}
            </div>
        </div>
    )
}