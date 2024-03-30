import React from 'react'
import './Heero.css'
import heroImg from '../assets/img1.jpg'

function Heero() {
    return (
        <div className='hero'>
            <div className='hero-head'>
                <h1>Welcome to QScript Coffee.
                    <br /><i>A fictional coffee shop.</i>
                </h1>
                <p>The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
                <button>Contact Us</button>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="" />

            </div>

        </div>
    )
}

export default Heero
