import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Navbar.css'
const navitems = [
    {
        id: 1,
        name: 'Home',
        icon: <FacebookIcon />
    },
    {
        id: 2,
        name: 'About Us',
        icon: <InstagramIcon />
    },
    {
        id: 3,
        name: 'Menu',
        icon: <XIcon />
    },
    {
        id: 4,
        name: 'Contact Us',
        icon: <PinterestIcon />
    },
]
function Navbar() {
    return (
        <div className='navbar'>
            <div className='border'>
                <div className='nav-items'>
                    <ul>
                        {navitems.map((item) => {
                            return <li>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div className='nav-icons'>
                    <ul> {navitems.map((item) => {
                        return <li>{item.icon}</li>
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
