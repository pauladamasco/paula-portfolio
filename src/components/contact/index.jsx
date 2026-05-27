import './index.scss'
import AnimatedLetters from '../animatedletters'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useState, useEffect, useRef } from 'react'
import L from 'leaflet'

// ── Fix do ícone padrão do Leaflet para bundlers ──
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [isMobile, setIsMobile] = useState(false)
    const refForm = useRef()

    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setLetterClass('text-animate-hover')
        }
        changeClass()
    }, [])

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="container contact-page">
            <h1 className="contact-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['L','o','c','a','l','i','z','a','ç','ã','o']}
                    idx={15}
                />
            </h1>

            <div className="address-info">
                <p className="address-text">
                    📍 Rua Ator Paulo Gustavo, 160 — Icarai, Niterói - RJ, 21655-180, Brasil
                </p>
            </div>

            <div className="map-wrap">
                <MapContainer
                    center={[-22.906004, -43.112086]}
                    zoom={13}
                    style={{ width: '100%', height: '100%' }}
                    dragging={!isMobile}
                    tap={!isMobile}
                    scrollWheelZoom={false}
                    touchZoom={!isMobile}
                    doubleClickZoom={!isMobile}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[-22.906004, -43.112086]} />
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact