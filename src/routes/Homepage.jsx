import React, { Fragment } from 'react'
import Card from '../components/card.component'
import ChevronRight from "../assets/chevron-right.svg"
import Hero from '../components/hero.component'
import CallAction from '../components/callToAction.component'
import Contact from '../components/contact.component'
export default function Homepage() {
    const places = [1,2,3,4,5,6]
  return (
    <Fragment>
        <Hero/>
        <div className='md:py-20  md:px-32 py-6 px-7'>
        <div className='flex justify-between flex-wrap mb-12 '>
        <h1 className='text-primary-blue font-semibold text-4xl '>Destinations</h1>
        <button type="submit" className='bg-primary-blue  text-white px-4 py-2 text-md rounded-3xl inline-flex text-center items-center focus:outline-none gap-1 transition duration-150 ease-in-out'> View All <img src={ChevronRight}></img></button>
        </div>
        <div className='flex flex-wrap gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-20 justify-center md:delay-300'>
        {
            places.map((item)=>{
                return <Card key={item}/>
            })
        }
        </div>
        
    </div>
    <CallAction/>
    <Contact/>
    </Fragment>
    
    
  )
}
