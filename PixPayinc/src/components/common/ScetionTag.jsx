import React from 'react'

export default function ScetionTag({ text, className = '' }) {
  return (
    <div
      className={`
      w-fit
      inline-flex
      px-2 md:px-3
      py-[0.5px] lg:py-[1px]
      items-center
      gap-[8px] lg:gap-[11px]
      rounded-md 
      border-[1px] border-[#65ADB9]
            transition-colors duration-300
       hover:bg-[#65ADB9]/10
          cursor-default
     
      ${className}
  `.trim()}
    >
      <p
        className="
      text-[#3894A2]
      font-satoshi-variable
      font-normal
      text-[8px] lg:text-[10px]
      
      leading-[20px]
      tracking-wider
    "
      >
        {text}
      </p>
    </div>
  )
}
