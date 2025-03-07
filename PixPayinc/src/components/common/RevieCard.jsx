import React from 'react'

export default function RevieCard({ review }) {
  return (
    <div
      key={review.id}
      className="w-full aspect-[16/8] min-h-[245px] h-auto flex flex-col justify-between flex-shrink-0 rounded-[12px] bg-white px-6 py-7 md:px-8  md:py-9  lg:py-9 lg:px-8"
    >
      <p className="text-[#8E949A] text-left font-satoshi-variable text-[12px] tracking-wide md:text-[14px] font-normal leading-[20px] md:leading-[24px]">
        "{review.text}"
      </p>
      <div className="flex flex-col md:gap-1 items-start">
        <p className="text-right text-[#33404F] text-[12px] md:text-[14px] leading-normal tracking-wide font-satoshi-variable font-semibold">
          {review.author} | CEO
        </p>
        <p className="text-left text-[#8E949A] font-normal font-satoshi-variable text-[10px] md:text-[12px]">
          November 12, 2001
        </p>
      </div>
    </div>
  )
}
