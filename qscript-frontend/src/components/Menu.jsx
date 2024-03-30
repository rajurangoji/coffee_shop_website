import React from 'react'
import './Menu.css'
import coffee from '../assets/coffeee.avif'
import MenuItems from './MenuItems'
function Menu() {
    return (

        <div className='menu-container'>
            <div className="about-us-head">
                <h1>Menu</h1>
            </div>

            <div className="menu">
                <div className="spl-item">
                    <h1>Try Our Special Offers</h1>
                    <p>Indulge in the refreshing allure of cold coffee, a harmonious blend of rich, chilled espresso and creamy milk, perfect for invigorating mornings or cooling off on warm afternoons.</p>
                    <img src={coffee} alt="" />
                    <button>Order Now</button>
                </div>
                <div className="menu-items">
                    <h1>All Items</h1>
                    <MenuItems />

                </div>
            </div>

        </div>
    )
}

export default Menu
