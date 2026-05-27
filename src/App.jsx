import './App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Health from './components/health'
import Treatments from './components/treatments'
import Assistence from './components/assistance' 

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Layout />}>
                </Route>
            </Routes>
        </HashRouter>
    )
  
}

export default App
