import React from 'react'
import './Banner.css'
import { BsFillPlayFill } from "react-icons/bs";
import img1 from '../../images/Group 18.png'
function Banner() {
    return (
        <div className='banner'>
            <div className='bannerDescription'>
            <h1>Digital marketing</h1>
            <p className='targetText'>Target and interactive marketing of goods and services</p>
            <p className='signUpText'>Sign up and get a discount</p>
            <div className='signUpButton'>
                <p>Sign up</p> <BsFillPlayFill/></div>
            </div>
            <div className='bannerImage'>
                <img src={img1} alt=''/>
            </div>
        </div>
    )
}

export default Banner
