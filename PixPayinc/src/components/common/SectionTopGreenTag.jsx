import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function SectionTopGreenTag({ text = '', className = '' }) {
  return (
    <p
      className={twMerge(
        `text-[#3F99A7] z-10 w-fit font-satoshi-medium text-[10px] md:text-[12px] px-1 tracking-wider uppercase leading-[17px]`,
        className,
      )}
    >
      {text}
    </p>
  )
}
