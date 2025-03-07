import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Headtext({
  text = '',
  spanText = '',
  textAlign = 'left',

  className = '',
  spanClassName = '',
}) {
  return (
    <p
      className={twMerge(
        `text-[#23303B]  text-[32px] leading-[41.6px] 
    md:text-[40px] md:leading-[52px] 
    lg:text-[44px] lg:leading-[57.2px] 
    font-satoshi-variable font-normal tracking-normal text-${textAlign}`,
        className,
      )}
    >
      {text}{' '}
      <span className={twMerge(`text-[#888]`, spanClassName)}>{spanText}</span>
    </p>
  )
}
