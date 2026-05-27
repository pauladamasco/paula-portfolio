import './index.scss'
import AnimatedLetters from '../animatedletters'
import { useEffect, useState } from 'react'
import whatsapp from '../../assets/images/whatsapp-icon.png'
import { Link } from 'react-router-dom'

const Assistence = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')

    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
                setLetterClass('text-animate-hover')
            }

            changeClass()
    }, [])

    return (
        <>
        <div className="container assistace-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','t','e','n','d','i','m','e','n','t','o','s',':']}
                        idx={15}
                        />
                </h1>
                <p> Consulta domiciliar <br />
                    Acompanhamento hospitalar <br />
                    Consultório
                </p>
            </div>
            <Link to="https://wa.me/5521997603146" className='flat-button'> <img src={whatsapp} className='whatsicon' /> Agende Sua consulta</Link>
        </div>
        </>
    )
}

export default Assistence