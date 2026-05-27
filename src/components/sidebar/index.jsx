import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { useState } from 'react'

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    const handleNavClick = (path) => {
        closeMenu()
        setTimeout(() => navigate(path), 50)
    }

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={closeMenu}>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="paula damasco" />
            </Link>

            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
                <span />
                <span />
                <span />
                <link className="home-link" to="/" />
            </button>

            <nav className={menuOpen ? 'open' : ''}>
                <NavLink className="home-link" to="/" end onClick={closeMenu}>Home</NavLink>
                <NavLink className="about-link" to="/about" onClick={closeMenu}>Sobre</NavLink>
                <NavLink className="treatments-link" to="/treatments" onClick={closeMenu}>Tratamentos</NavLink>
                <NavLink className="treatments-link" to="/health" onClick={closeMenu}>Saúde da Mulher</NavLink>
                <NavLink className="assistance-link" to="/assistance" onClick={closeMenu}>Atendimentos</NavLink>
                <NavLink className="contact-link" to="/contact" onClick={closeMenu}>Localização</NavLink>
            </nav>
        </div>
    )
}

export default Sidebar