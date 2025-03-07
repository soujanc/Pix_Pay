import React from 'react'
import Headtext from '../common/Headtext'
import SectionTopGreenTag from '../common/SectionTopGreenTag'

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: 'Open your account',
      description:
        'Sign up with your email or social media account in just a few clicks.',
    },
    {
      number: 2,
      title: 'Tranfer your money',
      description:
        'Securely link your bank account or credit card to start managing your finances.',
    },
    {
      number: 3,
      title: 'Watch your balance grow',
      description:
        'Accessed instantly and remail insulated from market volatlity',
    },
  ]
  return (
    <section className="relative overflow-hidden flex items-center bg-[#3F99A7] h-auto px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[150px]">
      <div className="flex flex-col space-y-[8px] md:space-y-[10px] lg:space-y-[12px] w-full">
        {/* svg start here */}
        <svg
          width="205"
          height="205"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute -top-20 -left-10"
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
          width="200"
          height="200"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute -top-10 left-55"
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
          className=" absolute top-0 -left-14"
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
          width="280"
          height="290"
          viewBox="0 0 292 267"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" absolute -bottom-50 right-34"
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
          width="200"
          height="200"
          viewBox="0 0 217 205"
          fill="none"
          className=" absolute -bottom-20 -right-15"
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
        {/* svg end here */}

        <SectionTopGreenTag text="how it works" className="text-[#A8F4FF]" />
        <Headtext
          text="Why Buinesses Prefer Pixpay"
          spanText="PixPay"
          className="text-white w-[60%]"
          spanClassName="text-[#D8D8D8]"
        />
           <div className="z-10 grid grid-cols-1 gap-5 md:gap-6 mt-[48px] md:mt-[64px] md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-[28px] md:p-[36px] border  border-[#cbdee1]/50 hover:border-[#cbdee1] rounded-[16px] hover:scale-[1.02] duration-500 transition-all bg-[#57A7B4] flex flex-col space-y-4 md:space-y-5 hover:shadow-[12px_12px_32.5px_0_rgba(54,54,54,0.05)] hover:bg-[#57A7B4]/80"
            >
              <p className="font-satoshi-variable text-[56px] md:text-[62px] w-fit h-fit bg-[#57A7B4] text-transparent bg-clip-text bg-gradient-to-b from-white to-90% to-transparent font-semibold uppercase leading-none">
                {step.number}
              </p>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-white font-satoshi-variable text-[20px] font-normal tracking-normal leading-none">
                  {step.title}
                </h3>
                <p className="text-[#E4E4E4]/80 font-satoshi-variable text-[12px] w-[80%] md:w-full md:text-[14px] font-normal leading-[16px] md:leading-[20px] tracking-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -top-[100px] -left-[100px] w-[551px] h-[551px] rounded-full bg-white/30 blur-[225px] flex-shrink-0"></div>
    </section>

  )
}
