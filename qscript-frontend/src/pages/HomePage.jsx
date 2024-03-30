import React from 'react'
import Navbar from '../components/Navbar'
import Heero from '../components/Heero'
import '../App.css'
import AboutUs from '../components/AboutUs'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function HomePage() {
    return (
        <div className='Homepage'>
            <Navbar />
            <Heero />
            <AboutUs />
            <Menu/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage
