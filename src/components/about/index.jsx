import './index.scss'
import AnimatedLetters from '../animatedletters'
import { useEffect, useState } from 'react'
import Face from '../../assets/images/face-p.png'

const About = () => {
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
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S','o','b','r','e']}
                        idx={15}
                        />
                </h1>
                <p> Médica formada pela Universidade Federal Fluminense e especialista em Clínica Médica pela UFF.
                    Atua como médica do Hospital Universitário Antônio Pedro. 
                </p>
            </div>
            <div className="face-container">
                <img src={Face} alt="medica" />
            </div>
        </div>
        </>
    )
}

export default About