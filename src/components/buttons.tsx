import React from 'react'

interface Buttons{
   button1Text : string,
   button2Text : string,
   button1Style? : string,
   button2Style? : string
   buttonWrapper?: string
}

const Buttons = ({ button1Text, button2Text, button1Style, button2Style, buttonWrapper }: Buttons) => {
   return (
      <>
         <div className={`${buttonWrapper} flex md:space-x-4 `}>

            <button className={`${button1Style} bg-transparent border border-yellowColor text-yellowColor py-2 px-4 rounded-full hover:bg-yellowColor hover:text-white transition duration-300`}>
               {button1Text}
            </button>
            <button className={`${button2Style}} bg-transparent underline text-white py-2 md:px-4`}>
               {button2Text}
            </button>
         </div>
      </>
   )
}

export default Buttons