import React from 'react'
import Headtext from '../common/Headtext'
import SectionTopGreenTag from '../common/SectionTopGreenTag'
import SubText from '../common/SubText'
import Button from '../common/Button'

export default function CTO() {
  return (
    <section className=" overflow-hidden flex items-center bg-[#F5F9FA] h-auto px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:px-[75px] lg:py-[150px]">
      <div className="relative gap-y-0 md:gap-y-1 overflow-hidden flex flex-col items-center justify-center rounded-[24px] w-full h-[440px] shadow-[12px_12px_32.5px_0_rgba(54,54,54,0.1)] bg-[#3F99A7]">
        <SectionTopGreenTag className="text-[#A8F4FF]" text="JOIN US" />
        <Headtext
          text="Ready to Simplify Your Finances?"
          className="w-[90%]md:w-[70%] lg:w-[40%] text-center text-white"
        />
        <SubText
          text="Take control of your cash flow with seamless invoicing, powerful integrations, and smarter money management."
          className="w-[90%] md:w-[70%] lg:w-[40%] text-center text-white/60"
        />
        <Button text="Get Started" showIcon={true} variant='filledWhite' className='mt-4'>Get Started</Button>
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full bg-white/55 blur-[250px] flex-shrink-0 trasnform -translate-x-1/2 -translate-y-1/2"></div>
        <svg
          width="205"
          height="205"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute top-5 -left-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M10.3749 194.494C-3.4583 181.473 -3.4583 160.371 10.3749 147.35L156.541 9.76578C170.374 -3.25526 192.792 -3.25526 206.625 9.76578C220.458 22.7868 220.458 43.8888 206.625 56.9098L60.4594 194.494C46.6262 207.507 24.2081 207.507 10.3749 194.494Z"
            fill="url(#paint0_linear_210_277)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_277"
              x1="10.3741"
              y1="194.49"
              x2="194.766"
              y2="-1.40249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="280"
          height="290"
          viewBox="0 0 292 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute top-20 -left-20"
        >
          <path
            opacity="0.5"
            d="M13.9607 253.649C-4.65356 236.668 -4.65356 209.148 13.9607 192.166L210.645 12.736C229.259 -4.24534 259.425 -4.24534 278.039 12.736C296.654 29.7174 296.654 57.2375 278.039 74.2188L81.3555 253.649C62.7412 270.62 32.5749 270.62 13.9607 253.649Z"
            fill="url(#paint0_linear_210_307)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_307"
              x1="13.9596"
              y1="253.644"
              x2="253.863"
              y2="-9.32715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="138"
          height="148"
          className=" hidden lg:block absolute -bottom-4 left-0"
          viewBox="0 0 138 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            opacity="0.5"
            d="M-66.384 187.03C-79.872 174.734 -79.872 154.827 -66.3839 142.53L78.4347 10.5058C91.9496 -1.81508 113.869 -1.81508 127.384 10.5058C140.872 22.8023 140.872 42.7092 127.384 55.0057L-17.4346 187.03C-30.9495 199.343 -52.8691 199.343 -66.384 187.03Z"
            stroke="white"
            stroke-opacity="0.8"
          />
        </svg>
        <svg
          width="205"
          height="205"
          viewBox="0 0 217 205"
          fill="none"
          className="hidden md:block absolute bottom-36 left-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M10.3749 194.494C-3.4583 181.473 -3.4583 160.371 10.3749 147.35L156.541 9.76578C170.374 -3.25526 192.792 -3.25526 206.625 9.76578C220.458 22.7868 220.458 43.8888 206.625 56.9098L60.4594 194.494C46.6262 207.507 24.2081 207.507 10.3749 194.494Z"
            fill="url(#paint0_linear_210_277)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_277"
              x1="10.3741"
              y1="194.49"
              x2="194.766"
              y2="-1.40249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="215"
          height="196"
          viewBox="0 0 215 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block absolute bottom-2 right-30"
        >
          <path
            id="Vector"
            opacity="0.5"
            d="M10.616 186.265C-2.87204 173.968 -2.872 154.062 10.6161 141.765L155.435 9.74064C168.95 -2.58021 190.869 -2.58021 204.384 9.74064C217.872 22.0372 217.872 41.944 204.384 54.2406L59.5654 186.265C46.0505 198.578 24.1309 198.578 10.616 186.265Z"
            stroke="white"
            stroke-opacity="0.8"
          />
        </svg>
        <svg
          width="205"
          height="205"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute top-6 -right-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M10.3749 194.494C-3.4583 181.473 -3.4583 160.371 10.3749 147.35L156.541 9.76578C170.374 -3.25526 192.792 -3.25526 206.625 9.76578C220.458 22.7868 220.458 43.8888 206.625 56.9098L60.4594 194.494C46.6262 207.507 24.2081 207.507 10.3749 194.494Z"
            fill="url(#paint0_linear_210_277)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_277"
              x1="10.3741"
              y1="194.49"
              x2="194.766"
              y2="-1.40249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="280"
          height="290"
          viewBox="0 0 292 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute -top-30 -right-20"
        >
          <path
            opacity="0.5"
            d="M13.9607 253.649C-4.65356 236.668 -4.65356 209.148 13.9607 192.166L210.645 12.736C229.259 -4.24534 259.425 -4.24534 278.039 12.736C296.654 29.7174 296.654 57.2375 278.039 74.2188L81.3555 253.649C62.7412 270.62 32.5749 270.62 13.9607 253.649Z"
            fill="url(#paint0_linear_210_307)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_307"
              x1="13.9596"
              y1="253.644"
              x2="253.863"
              y2="-9.32715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="205"
          height="205"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute bottom-17 -right-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M10.3749 194.494C-3.4583 181.473 -3.4583 160.371 10.3749 147.35L156.541 9.76578C170.374 -3.25526 192.792 -3.25526 206.625 9.76578C220.458 22.7868 220.458 43.8888 206.625 56.9098L60.4594 194.494C46.6262 207.507 24.2081 207.507 10.3749 194.494Z"
            fill="url(#paint0_linear_210_277)"
            fill-opacity="0.20"
          />
          <defs>
            <linearGradient
              id="paint0_linear_210_277"
              x1="10.3741"
              y1="194.49"
              x2="194.766"
              y2="-1.40249"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#8EC4CD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
