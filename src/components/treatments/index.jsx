import { useEffect, useState } from 'react'
import Face from '../../assets/images/preto-branco.png'
import Acompanhamento from '../../assets/images/acompanhamento.png'
import Checkup from '../../assets/images/check-up.png'
import Diagnostico from '../../assets/images/diagnostico.png'
import Exame from '../../assets/images/exame.png'
import SaudeMulher from '../../assets/images/saude_mulher.webp'
import './index.scss'

const photos = [
    { src: Acompanhamento, alt: 'Acompanhamento de Comorbidades', title: 'Acompanhamento de Comorbidades', desc: 'Monitoramento contínuo de doenças crônicas e condições associadas.' },
    { src: Checkup,        alt: 'Check Up',                       title: 'Check Up',                       desc: 'Avaliação preventiva completa do estado de saúde.' },
    { src: Diagnostico,    alt: 'Diagnósticos Difíceis',          title: 'Diagnósticos Difíceis',          desc: 'Investigação detalhada de quadros clínicos complexos.' },
    { src: Exame,          alt: 'Exames de Rastreio',             title: 'Exames de Rastreio',             desc: 'Detecção precoce de doenças através de exames direcionados.' },
    { src: SaudeMulher,    alt: 'Saúde da Mulher',                title: 'Saúde da Mulher',                desc: 'Imunização, menopausa, screening para câncer de mama e colo do útero, prevenção e tratamento de osteoporose' },
]

const Treatments = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => setLetterClass('text-animate-hover'), 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="container">              {/* ← wrapper padrão do Layout */}
            <div className="treatments-page">
                <div className="treatments-face">
                    <img src={Face} alt="Médica" />
                </div>

                <div className="treatments-grid">
                    {photos.map((photo, index) => (
                        <div className="treatments-grid__card" key={index}>
                            <div className="treatments-grid__img-wrap">
                                <img src={photo.src} alt={photo.alt} />
                            </div>
                            <div className="treatments-grid__caption">
                                <h3>{photo.title}</h3>
                                <p>{photo.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Treatments
