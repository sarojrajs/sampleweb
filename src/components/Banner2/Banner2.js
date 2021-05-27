import React from 'react'
import './Banner2.css'
import img from '../../images/Group 1.png'
function Banner2() {
    return (
        <div className='banner2'>
            <div className='banner2Image'>
                <img src={img} alt=''/>
            </div>
            <div className='banner2Description'>
                <div className='details'>
                    <h2>Design and strategy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className='details'>
                    <h2>Design and strategy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner2
