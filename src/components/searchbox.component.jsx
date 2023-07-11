import React from 'react'

export default function Searchbox() {
  return (
    <form>
        <div className='relative'>
        
        <input type="text" placeholder='Enter your destination'className='w-2/4 p-2 pl-5 rounded-lg focus:outline-none' ></input>
        <button type="submit" className=' bg-primary-blue text-white px-4 py-2  rounded-lg font-medium ml-2'>Search</button>
        </div>
        
    </form>
  )
}
