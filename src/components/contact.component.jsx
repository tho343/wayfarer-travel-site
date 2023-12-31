import React, { Fragment } from 'react'
import Logo from "../assets/wayfarer-white-3.svg"
import AppleStore from "../assets/apple-store-logo.svg"
import GoogleStore from "../assets/google-play-logo.svg"
export default function Contact
() {
  return (
    <Fragment>
        <div className='bg-ascent-blue md:py-20  md:px-32 py-6 px-7 grid grid-cols-4 text-white text-start'>
        <img className='w-20' src={Logo}></img>
        <ul className='space-y-4'>
            <li className='font-bold'>
                Links
            </li>
            <li>
                Destinations
            </li>
            <li>
                Accommodations
            </li>
            <li>
                Flights
            </li>
            <li>
                Rentals
            </li>
        </ul>
        <ul className='space-y-4'>
            <li className='font-bold'>
                Support
            </li>
            <li>
                Help Center
            </li>
            <li>
                Contact us
            </li>
            <li>
                FAQs
            </li>
            
        </ul>
        <div>
            <div className='w-40'>
                <img src={AppleStore} ></img>
               
            </div>
            
        </div>
    </div>
    <p className='bg-ascent-blue text-gray-text-color'>2023 Wayfarer. All rights reserved </p>
    </Fragment>
    
  )
}
