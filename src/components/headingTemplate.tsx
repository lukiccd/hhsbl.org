import React from 'react'

interface HeadingProps {
   spanText: string,
   mainText: string,
   spanStyle?: string,
   mainTextStyle?: string
}

const headingTemplate = ({ spanText, mainText, spanStyle, mainTextStyle }: HeadingProps) => {
   return (
      <article className='flex flex-col justify-center items-center mb-10 xl:mb-16'>
         <span className={spanStyle}>{spanText}</span>
         <h2 className={mainTextStyle}>{mainText}</h2>
         <span className='gradient-line mt-5'></span>
      </article>
   )
}

export default headingTemplate