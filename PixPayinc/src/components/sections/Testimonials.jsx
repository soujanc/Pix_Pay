import React, { useEffect, useRef, useState } from 'react'
import Headtext from '../common/Headtext'
import RevieCard from '../common/RevieCard'
import SectionTopGreenTag from '../common/SectionTopGreenTag'
import SubText from '../common/SubText'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonialsData = [
  {
    id: 1,
    text: 'This product exceeded my expectations! The quality is amazing, and the service was excellent.',
    author: 'John Doe 1',
    pos: 0,
    active: true,
  },
  {
    id: 2,
    text: 'Fantastic experience! The team was professional, and the results were beyond what I imagined.',
    author: 'John Doe 2',
    pos: 1,
    active: true,
  },
  {
    id: 3,
    text: 'I highly recommend this! The attention to detail and customer service were outstanding.',
    author: 'John Doe 3',
    pos: 2,
    active: true,
  },
  {
    id: 4,
    text: 'One of the best purchases I’ve ever made. The design and functionality are top-notch.',
    author: 'John Doe 4',
    pos: 3,
    active: true,
  },
  {
    id: 5,
    text: 'Absolutely love it! It’s worth every penny, and I’m extremely satisfied with my decision.',
    author: 'John Doe 5',
    pos: 4,
    active: true,
  },
  {
    id: 6,
    text: 'This product exceeded my expectations! The quality is amazing, and the service was excellent.',
    author: 'John Doe 6',
    pos: 5,
    active: false,
  },
]

export default function Testimonials() {
  const [reviews, setReviews] = useState(testimonialsData)
  const swiperRef = useRef(null)

  //   const handleRightClick = () => {
  //     const prevState = [...reviews]
  //     const nextCardid = prevState
  //       .filter((review) => review.active === true)
  //       .sort((a, b) => (a.pos > b.pos ? 1 : -1))[0].id

  //     prevState.find((r) => !r.active).active = true
  //     prevState.find((r) => r.id === nextCardid).active = false
  //     prevState.find((r) => r.id === nextCardid).pos =
  //       Math.max(...prevState.map((o) => o.pos)) + 1

  //     setReviews(prevState)
  //   }

  //   const handleLeftClick = () => {
  //     const prevState = [...reviews]
  //     const nextCardid = prevState
  //       .filter((review) => review.active === true)
  //       .sort((a, b) => (a.pos > b.pos ? 1 : -1))
  //       .pop().id

  //     prevState.find((r) => !r.active).pos =
  //       Math.min(...prevState.map((o) => o.pos)) - 1
  //     prevState.find((r) => !r.active).active = true
  //     prevState.find((r) => r.id === nextCardid).active = false

  //     setReviews(prevState)
  //   }
  return (
    <section className="relative overflow-hidden flex items-center bg-[#F5F9FA] h-auto px-[20px] py-[60px] md:px-[40px] md:py-[80px] lg:p-[150px]">
      <div className="flex flex-col justify-center items-start space-y-[8px] md:space-y-[10px] lg:space-y-[12px] w-full">
        <SectionTopGreenTag text="Testimonials" />
        <div className="w-full flex gap-2 flex-col justify-center items-start">
          <Headtext
            text="Don’t take our word for it,
listen to what our clients say "
            textAlign="left"
            className="w-[90%] md:w-[70%] lg:w-[60%] "
          />
          <SubText className='w-[80%] md:w-[70%] lg:w-[60%]' text="Hear from our satisfied clients who have experienced remarkable growth and innovation with our solutions. Their success stories speak volumes about the impact we can have together." />
        </div>
        <div className="flex w-full overflow-hidden mt-10 md:mt-12 lg:mt-16">
          {/* Left Navigation Button */}

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className=" w-full "
            breakpoints={{
              640: {
                slidesPerView: 1, // For small screens (mobile)
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.2, // For medium screens (tablet)
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.1, // For larger screens (desktop)
                spaceBetween: 20,
              },
            }}
          >
            {testimonialsData.map((review) => (
              <SwiperSlide key={review.id}>
                <RevieCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div
            className={`flex transition-translate translate-x-[528px] duration-500 ease-in-out `}
          >
            {reviews
              .filter((review) => review.active)
              .sort((a, b) => (a.pos > b.pos ? 1 : -1))
              .map((review) => (
                <RevieCard key={review.id} review={review} />
              ))}
          </div> */}
        </div>
        <div className="w-full justify-end  hidden md:flex">
          {' '}
          <div className=" justify-end space-x-2 mt-8 gap-2 w-fit">
            <button
              onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
              className=" text-white rounded hover:scale-[1.1] transition duration-300"
            >
              {/* Left Arrow SVG */}
              <svg
                width="40px"
                height="40px"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff"
              >
                <path
                  d="M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5"
                  stroke="#33404F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#D8D8D8"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill=""
                ></path>
              </svg>
            </button>
            <button
              onClick={() =>
                swiperRef.current && swiperRef.current?.slideNext()
              }
              className="  text-white rounded hover:scale-[1.1] transition duration-300"
            >
              {/* Right Arrow SVG */}
              <svg
                width="40px"
                height="40px"
                strokeWidth="1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#ffffff"
              >
                <path
                  d="M8 12H16M16 12L12.5 8.5M16 12L12.5 15.5"
                  stroke="#33404F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#D8D8D8"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
