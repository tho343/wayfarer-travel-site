import React from 'react'
//global button component
export default function Button(props) {
    const text = props.text;
    const primary = props.primary;
    return (
        <button type="button"
            className={
                `${
                    primary ? "text-white  bg-primary-blue" : "bg-white text-blue"
                } hover:shadow-[0_8px_25px_-8px_rgb(0,0,0,0.13)] font-semibold focus:outline-none  font-medium rounded-md text-[1rem] px-[1.714rem] py-[0.786rem] text-center mr-3 md:mr-3`
        }>
            {
            text
        } </button>
    )
}
