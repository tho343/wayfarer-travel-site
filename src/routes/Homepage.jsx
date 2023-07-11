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
        <div className='py-20  px-32'>
        <div className='flex justify-between flex-wrap mb-12'>
        <h1 className='text-primary-blue font-semibold text-4xl '>Destinations</h1>
        <button type="submit" className='bg-primary-blue  text-white px-4 py-2 text-md rounded-3xl inline-flex text-center items-center focus:outline-none gap-1'> View All <img src={ChevronRight}></img></button>
        </div>
        <div className='flex flex-wrap gap-x-16 gap-y-20 justify-center'>
        {
            places.map((item)=>{
                return <Card/>
            })
        }
        </div>
        
    </div>
    <CallAction/>
    <Contact/>
    </Fragment>
    
    
  )
}
