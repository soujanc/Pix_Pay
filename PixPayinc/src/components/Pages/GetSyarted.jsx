import React, { useState } from 'react'
import Button from '../common/Button'
import Headtext from '../common/Headtext'
import Navbar from '../common/Navbar'
import SectionTopGreenTag from '../common/SectionTopGreenTag'
import SubText from '../common/SubText'

export default function GetSyarted() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }
  return (
    <>
      <Navbar />
      <div className="overflow-hidden flex justify-center items-center bg-white h-auto px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:py-[150px] lg:px-[250px]">
        <div className="flex flex-col justify-center items-center space-y-[8px] px-[60px] md:space-y-[10px] lg:space-y-[12px] w-full">
          <div className="w-full flex gap-2 flex-col justify-center items-center">
            <Headtext
              text="Join PixPay & Take Control of Your Finances"
              spanText=""
              textAlign="center"
              className="w-[80%] md:w-[70%] text-center"
            />
            <SubText
              text="Enter your details below, and our team will review your request. We’ll get back to you via email with next steps to help you streamline payments and optimize your business finances."
              textAlign="center"
              className="mt-1 w-[90%] md:w-[60%] lg:w-[70%] text-center"
            />
          </div>
          <div className="flex w-full mt-[135px] gap-10">
            <div className="w-[45%] shadow-[12px_12px_32.5px_0_rgba(54,54,54,0.12)] rounded-[16px] flex items-center justify-center h-auto bg-gradient-to-b from-[#3F99A7]  via-[#53acba] from-0% to-100% to-[#7fcad5]">
              {' '}
              <div className="leading-none transition-text flex flex-col items-center font-bold duration-300 hover:scale-[1.05]">
                <p>
                  <span className="font-timmana-regular text-[24px] tracking-normal text-white">
                    Pix
                  </span>
                  <span className="font-timmana-regular text-[24px] tracking-normal text-[#98dae6]">
                    Pay
                  </span>
                </p>
                <p className='text-[12px] text-white font-normal tracking-wide '>smarter finance</p>
              </div>
            </div>
            <div className="w-[55%]">
              {' '}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
              >
                {/* First Name */}
                <div className="flex flex-col w-full md:flex-row gap-4">
                <div className="flex w-full md:w-1/2 flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="flex w-full md:w-1/2 flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>
                </div>
                {/* Company Name */}
                <div className="flex  flex-col">
                  <label
                    htmlFor="companyName"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phoneNumber"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="message"
                    className="text-[12px] font-satoshi-variable font-normal tracking-wide text-[#8E949A] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-[1px] h-28 text-[12px] font-normal placeholder:text-gray-300 border-[#CFD8DC]/60 focus:outline-none  px-4 py-2   focus:ring-1 focus:ring-[#3F99A7]/60"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-[#65AFBA]">Sign Up</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
