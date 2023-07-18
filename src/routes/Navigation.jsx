import React, { useState } from 'react'
import logo from "../assets/wayfarer-white-3.svg"
import Button from '../components/button.component';
export default function Navigation() {
    const [open,setOpen] = useState(false);
    const toggleOpen = () =>{
        setOpen(!open);
    }
  return (
    <nav>
        <div className='bg-black max-w-screen  flex flex-wrap items-center justify-between mx-auto p-4 px-4' >
            <a className='flex items-center '>
                <img src={logo} className='h-12 mr-20' alt='logo'></img>
            </a>
            <div className='md:order-2'>
                <Button text="Sign In" primary={true} />
                <Button text="Sign Up" primary={false}/>
                <button type="button" data-collapse-toggle="navbar-cta" className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls="navbar-cta" aria-expanded="false" onClick={toggleOpen}>
                    <span className='sr-only'>Open main menu</span>
                    <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

                </button>
            </div>
            <div className={`items-center ${open? "block" : "hidden"} transition-all ease-out duration-300 justify-between w-full md:flex md:w-auto md:order-1 `}id="navbar-cta">
                <ul className='flex flex-col font-semibold p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-tranparent rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-tranparent rounded md:bg-transparent  md:p-0 " >Accomodations</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-tranparent rounded md:bg-transparent  md:p-0 " >Popular Destinations</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}
