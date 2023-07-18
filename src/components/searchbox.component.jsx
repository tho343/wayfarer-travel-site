import React from 'react'
import Button from './button.component';


export default function Searchbox(props) {
  const placeholder = props.placeholder;
 
  return (
    <form>
        <div className='relative'>
        
        <input type="text" placeholder={placeholder} className=' py-[0.786rem] pl-4 w-2/4 p-2 rounded-lg rounded-r-none focus:outline-none' ></input>
        <Button text="Search" primary={true}/>       
    </div>
        
    </form>
  )
}
