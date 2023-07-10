import React from 'react'
import backgroundImage from "../assets/norway.jpg"
import Searchbox from './searchbox.component'
export default function Hero() {
  return (
    <div >
        <div className='  image-container bg-[url(./assets/norway.jpg)]  bg-origin-border bg-center  bg-cover h-80 flex flex-col justify-center space-y-4'>
            <div className='text text-white backdrop-blur-sm  text-center p-4'>
                    <h1 className=' font-bold text-4xl'>Discover new destinations</h1>
                    <h2 className='font-semibold text-xl'>Wayfarer makes it simple for even the most seasoned travelers to find new journeys to add to their bucket lists.</h2>
            </div> 
            <Searchbox/>
            
        </div>
        
        
    </div>
  )
}
