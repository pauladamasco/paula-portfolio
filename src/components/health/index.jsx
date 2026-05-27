import { useEffect, useState } from 'react'
import './index.scss'
import Imunização from '../../assets/images/imunização.png'
import Menopausa from '../../assets/images/menopausa.png'
import Exames from '../../assets/images/exames.png'
import Osso from '../../assets/images/osso.png'
import Cardio from '../../assets/images/cardio.png'
import AnimatedLetters from '../animatedletters'

const healthItems = [
    { id: 1, title: 'Imunização:', description: 'Prevenção hoje, saúde amanhã.', image: Imunização },
    { id: 2, title: 'Menopausa:', description: 'Reposição hormonal baseado em ciência.', image: Menopausa },
    { id: 3, title: 'Exames de Wellness e screening para:', description: 'Mama, colo de utero, intestino.', image: Exames },
    { id: 4, title: 'Osteoporose:', description: 'mais força hoje, mais liberdade no futuro.', image: Osso },
    { id: 5, title: 'Prevenção de doenças cardiovasculares.', image: Cardio },
]

const Health = () => {
    const [visible, setVisible] = useState(false)
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setLetterClass('text-animate-hover')
        }
        changeClass()
    }, [])

    return (
        <div className={`health-wrapper ${visible ? 'visible' : ''}`}>
            <div className="health-sidebar-title">
                <span>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S','a','ú','d','e',' ','d','a',' ','M','u','l','h','e','r',' ',':']}
                        idx={15}
                    />
                </span>
            </div>

            <div className="health-list">
                {healthItems.map((item, index) => (
                    <div className="health-item" key={item.id} style={{ animationDelay: `${index * 120}ms` }}>
                        <div className="health-item__image">
                            {item.image
                                ? <img src={item.image} alt={item.title} />
                                : <div className="health-item__image-placeholder" />
                            }
                        </div>
                        <div className="health-item__text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Health