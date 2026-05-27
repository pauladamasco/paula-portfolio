import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../animatedletters'
import Logo from './logo'
import whatsapp from '../../assets/images/whatsapp-icon.png'
import mac from '../../assets/images/mac.webp'


const Home = () => {
    const nameArray = ['P','a','u','l','a','','D','a','m','a','s','c','o']
    const jobArray = ['C','l','í','n','i','c','a',' ','M','é','d','i','c','a',]
    const [letterClass, setLetterClass] = useState ('text-animate')

   /* useEffect ( () =>{
        return setTimeout (() => {
             setLetterClass ('text-animate-hover')
        }, 4000)
    }, [])
    */
    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
                setLetterClass('text-animate-hover')
            }

            changeClass()
    }, [])


    return (
        <div className="container home-page">
            <img src={mac} className='mac' />
            <div className="text-zone">
                <h1>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx= {24} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx= {26} />
                </h1>
                <Link to="https://wa.me/5521997603146" className='flat-button'> <img src={whatsapp} className='whatsicon' /> Agende Sua consulta</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home