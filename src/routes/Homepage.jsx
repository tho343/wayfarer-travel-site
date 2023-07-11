import React from 'react'
import Card from '../components/card.component'
import ChevronRight from "../assets/chevron-right.svg"
export default function Homepage() {
  return (
    <div className='py-20  px-32'>
        <div className='flex justify-between flex-wrap mb-12'>
        <h1 className='text-primary-blue font-semibold text-4xl '>Destinations</h1>
        <button type="submit" className='bg-primary-blue  text-white px-4 py-2 text-md rounded-3xl inline-flex text-center items-center focus:outline-none gap-1'> View All <img src={ChevronRight}></img></button>
        </div>
        
        <Card/>
    </div>
    
  )
}
