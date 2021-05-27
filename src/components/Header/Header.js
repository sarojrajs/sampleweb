import React from 'react'
import './Header.css'
import { AiOutlineSearch } from "react-icons/ai";
function Header() {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <li>About</li>
                <li>Team</li>
                <li>Pricing</li>
                <li>Issues</li>
                <li>Sign In</li>
                <div className='searchBar'>
                    <input type='text' placeholder='Get More'/>
                    <AiOutlineSearch/>
                </div>
            </div>

        </div>
    )
}

export default Header
