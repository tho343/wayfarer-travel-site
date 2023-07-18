import React from 'react'
import Yosemite from "../assets/yosemite-california.jpg"
import Searchbox from './searchbox.component'
export default function CallAction() {
    return (
        <div className='bg-secondary-blue md:py-20  md:px-32 py-6 px-7 text-left space-y-5'>
            <h1 className='text-primary-blue font-semibold text-4xl'>
                New to traveling?
            </h1>
            <p className='text-secondary-text'>Wayfarer can help you started with taking that first trip to a new place</p>
            <div className='flex md:flex-row flex-col items-center justify-between'>
                <div className='w-96 min-w-0 max-w-md rounded-xl overflow-hidden m-3'>
                    <img src={Yosemite}></img>
                </div>
                <div className='space-y-5'>
                    <p className='text-secondary-text text-md'>Sign up for our recommended destinations newsletter and receive new adventures each week!</p>
                    
                    <Searchbox placeholder="Enter your email address"/>
                </div>
            </div>


        </div>
    )
}
