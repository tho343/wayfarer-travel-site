import React from 'react'
import Star from "../assets/star.svg"
import FullStar from "../assets/star-filled.svg"
import HalfStar from "../assets/star-half-filled.svg"
import Hanger from "../assets/hanger.svg"
import Sofa from "../assets/sofa.svg"
import Wifi from "../assets/heart/rss.svg"
import Heart from "../assets/heart.svg"
import FilledHeart from "../assets/heart-1.svg"


export default function Card() {
    return (
        <div className='w-72 h-96 bg-[url(https://plus.unsplash.com/premium_photo-1672855635926-c0c4c0483bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80)] bg-center flex justify-center content-end flex-wrap rounded-lg overflow-hidden relative '>
            <img src={Heart} className='absolute w-12 top-5 right-5'></img>
            <div className=' backdrop-blur-lg flex flex-col w-full justify-items-start p-4 space-y-1'>

                <div className='font-bold text-xl'>Lake Tahoe</div>
                <div className='flex items-center justify-center w-full'>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                    <img src={Star}></img>
                </div>
                

                <h3>California, USA</h3>
                <ul className='flex justify-center gap-x-2'>
                    <li>Wifi</li>
                    <li>Resort</li>
                    <li>Laundry</li>
                </ul>
            </div>
        </div>
    )
}
