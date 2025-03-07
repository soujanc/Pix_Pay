import React from 'react'
import { twMerge } from 'tailwind-merge'

// Ensure you have this package installed

export default function SubText({
  text = '',
  textAlign = 'left',
  width = '[26%]',
  className = '',
}) {
  return (
    <p
      className={twMerge(
        `py-3 text-[12px] md:text-[14px] w-${width} text-[#8E949A]/70 font-satoshi-variable tracking-wide font-medium leading-normal text-${textAlign}`,
        className,
      )}
    >
      {text}
    </p>
  )
}
