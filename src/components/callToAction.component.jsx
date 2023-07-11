import React from 'react'
import Yosemite from "../assets/yosemite-california.jpg"

export default function CallAction() {
    return (
        <div className='bg-secondary-blue py-20  px-32 text-left space-y-5'>
            <h1 className='text-primary-blue font-semibold text-4xl'>
                New to traveling?
            </h1>
            <p className='text-secondary-text'>Wayfarer can help you started with taking that first trip to a new place</p>
            <div className='flex items-center justify-between'>
                <div className='w-96 min-w-0 max-w-md rounded-xl overflow-hidden'>
                    <img src={Yosemite}></img>
                </div>
                <div className='space-y-5'>
                    <p className='text-secondary-text text-md'>Sign up for our recommended destinations newsletter and receive new adventures each week!</p>
                    <form className='inline-flex w-full '>
                        <input className='py-4 pl-4 w-3/4  rounded-md ' type="text" placeholder='Enter your email address'></input>
                        <button type="submit" className='bg-primary-blue text-white px-3 rounded-md'> Sign Up</button>
                    </form>
                </div>
            </div>


        </div>
    )
}
