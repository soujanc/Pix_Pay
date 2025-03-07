import React from 'react'
import Headtext from '../common/Headtext'
import SectionTopGreenTag from '../common/SectionTopGreenTag'
import SubText from '../common/SubText'

export default function StatsandPricing() {
  return (
    <section className="overflow-hidden flex justify-center items-center bg-white h-auto px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[150px]">
      <div className="flex flex-col justify-center items-center space-y-[8px] md:space-y-[10px] lg:space-y-[12px] w-full">
        <SectionTopGreenTag text="Transforming Payment Experiences" />
        <div className="w-full flex gap-2 flex-col justify-center items-center">
          <Headtext
            text="Driving Innovation, Powering Growth"
            spanText=""
            textAlign="center"
            className="w-[80%] md:w-[50%] text-center"
          />
          <SubText
            text="Empowering businesses of all sizes to innovate and thrive. From startups to enterprises, we’ve driven impactful improvements across industries"
            textAlign="center"
            className="mt-1 w-[90%] md:w-[60%] lg:w-[50%] text-center"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-2 w-[70%] md:flex-row justify-around mt-[48px] md:mt-[64px]">
          <div className="flex flex-col gap-y-1 items-center mb-4 md:mb-0">
            <p className="text-[52px] md:text-[62px] text-[#33404F] font-satoshi-variable font-bold leading-none tracking-tight">
              95%
            </p>
            <p className="text-[#3F99A7] text-center font-satoshi-variable text-[14px] md:text-[16px] font-normal leading-[25.6px]">
              Efficiency Boost
            </p>
          </div>
          <div className="flex flex-col gap-y-1 items-center mb-4 md:mb-0">
            <p className="text-[52px] md:text-[62px] text-[#33404F] font-satoshi-variable font-bold leading-none tracking-tight">
              10K+
            </p>
            <p className="text-[#3F99A7] text-center font-satoshi-variable text-[14px] md:text-[16px] font-normal leading-[25.6px]">
              Transactions Daily
            </p>
          </div>
          <div className="flex flex-col gap-y-1 items-center mb-4 md:mb-0">
            <p className="text-[52px] md:text-[62px] text-[#33404F] font-satoshi-variable font-bold leading-none tracking-tight">
              40%
            </p>
            <p className="text-[#3F99A7] text-center font-satoshi-variable text-[14px] md:text-[16px] font-normal leading-[25.6px]">
              Cost Savings
            </p>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row justify-around space-x-6 mt-28">
          {/* Basic Card */}
          <div className="w-[400px] p-[32px] rounded-[20px] space-y-6 bg-gradient-to-br  hover:shadow-[12px_12px_32.5px_0_rgba(54,54,54,0.1)] shadow-[12px_12px_32.5px_0_rgba(54,54,54,0.04)] from-[#ffffff] to-[#ffffff] border border-[#d4dadc] flex flex-col items-start transition-transform duration-500 hover:scale-105">
            <h2 className="text-[#33404F]/60 text-left font-satoshi-variable text-[16px] font-semibold leading-normal tracking-wider">
              Basic
            </h2>
            <p className="text-[#33404F] text-left font-satoshi-variable text-[44px] font-bold leading-[30px] ">
              $9.99 <span className="text-[#33404F]/40 text-sm">/month</span>
            </p>
            <p className="text-[#8E949A] text-left font-satoshi-variable text-[14px] font-medium leading-[24px] ">
              <p className="text-[#8E949A] text-left font-satoshi-variable text-[14px] font-medium leading-[24px]">
                Ideal for individuals and small teams, offering essential tools
                for effective project management.
              </p>
            </p>
            <div className="h-[1px] bg-gray-200 w-full"></div>
            <ul className="list-disc list-inside  text-[#8E949A] text-[14px]">
              <p className="mb-3 text-[12px] font-normal text-gray-400/80">
                whats included :
              </p>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Access to basic features
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Up to 5 users
              </li>
              <li className="flex  mb-2  items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Email support
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Monthly updates
              </li>
            </ul>
          </div>

          {/* Premium Card */}
          <div className="w-[400px] p-[32px] rounded-[20px] gap-y-6 bg-gradient-to-b from-[#45a6b5] to-[#49c7db] flex flex-col items-start transition-transform duration-500 hover:scale-105">
            <h2 className="text-white/80 text-left font-satoshi-variable text-[16px] font-semibold leading-normal tracking-wider">
              Premium
            </h2>
            <p className="text-white text-left font-satoshi-variable text-[44px] font-bold leading-[30px]">
              $19.99 <span className="text-white/50 text-sm">/month</span>
            </p>
            <p className="text-white/80 text-left font-satoshi-variable text-[14px] font-medium leading-[24px]">
              Perfect for growing businesses, offering tools to boost
              productivity and streamline operations.
            </p>
            <div className="h-[1px] bg-white/40 w-full"></div>
            <ul className=" list-disc font-normal tracking-wide list-inside text-white/80 text-[14px]">
              <p className="mb-3 text-[12px] font-normal text-white/50">
                whats included :
              </p>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                All Basic features
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Unlimited users
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Priority email and chat support
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Advanced analytics and reporting
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Custom integrations
              </li>
              <li className="flex mb-2 items-center">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  stroke-width="1.5"
                  className="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7.53044 11.9697C7.23755 11.6768 6.76268 11.6768 6.46978 11.9697C6.17689 12.2626 6.17689 12.7374 6.46978 13.0303L9.46978 16.0303C9.76268 16.3232 10.2376 16.3232 10.5304 16.0303L17.5304 9.03033C17.8233 8.73744 17.8233 8.26256 17.5304 7.96967C17.2375 7.67678 16.7627 7.67678 16.4698 7.96967L10.0001 14.4393L7.53044 11.9697Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Quarterly updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
