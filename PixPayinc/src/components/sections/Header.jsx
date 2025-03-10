import React, { useEffect, useRef, useState } from 'react'
import Button from '../common/Button'
import ScetionTag from '../common/ScetionTag'
import { motion, useInView } from 'framer-motion'

export default function Header() {
  const ref = useRef(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  const isInView = useInView(ref, { once: true })
  useEffect(() => {
    // Trigger header animation automatically on page load
    setHeaderVisible(true)
  }, [])
  return (
    <>
      <header className="relative overflow-hidden bg-[#F5F9FA] h-[650px] m:px-[40px] md:px-[100px] lg:px-[124px] ">
        <div className="z-30 flex h-full items-center  w-1/2">
          <div className="flex-col z-10 space-y-6">
            <ScetionTag text="Designed for Growth" />
            <h1 className="text-[54px] text-[#23303B] font-satoshi-variable font-normal leading-[76px] tracking-[-1.62px]">
              <span className="font-bold">Helping Businesses</span> Scale with
              Smarter Money Management.
            </h1>

            <p className="text-[14px] text-[#8E949A] font-satoshi-variable font-normal leading-normal w-[502px]">
              Support small buisnesses with simple invoicing, powerfull
              inetgrations, and cash flow management tools
            </p>

            <div className="flex mt-2 space-x-4">
            <div className="flex mt-2 w-3/4 bg-white p-0.5 rounded-lg shadow-sm border border-[#E2E2E2] overflow-hidden focus-within:ring-2 focus-within:ring-[#3F99A7]/20 focus-within:border-[#3F99A7]/20">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-grow px-4 py-3 text-[14px] text-[#23303B] font-satoshi-variable outline-none"
                />
                <Button variant="filledHover" className="whitespace-nowrap">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex gap-6 text-[#23303B]/70 text-[24px]">
              <p className="font-dmserifdisplay duration-300 hover:scale-105 p-2">Nexora</p>
              <p className="font-novasquare duration-300 hover:scale-105 p-2">PaySync</p>
              <div className="flex items-center duration-300 hover:scale-105 gap-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#23303B]/70">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clipRule="evenodd" />
                </svg>
                <p className="font-josefinslab p-2">InvestaHub</p>
               
              </div>
            </div>
          </div>
        </div>

        <motion.img
          src="/snapshot.png"
          alt=""
          initial={{ opacity: 0.3, y: 500 }}
          animate={
            headerVisible ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 500 }
          }
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 10,
            delay: 0.5,
          }}
          className="absolute z-20 hidden lg:block aspect-[9/16] h-[800px] top-[100px] right-[200px]"
        />

        <motion.img
          src="/cardsnapshot.png"
          alt=""
          initial={{ opacity: 0, x: 100 }}
          animate={
            headerVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
          }
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
            delay: 1,
          }}
          className="absolute hidden lg:block z-10 w-[550px] top-[77px] right-[70px] "
        />
        <img
          src="/IconsBcakground.png"
          alt=""
          className="absolute  w-[700px] right-0 bottom-0"
        />
        <img
          src="/topIconaBackground.png"
          alt=""
          className="absolute w-[280px] right-0 top-0"
        />
        <svg
          width="126"
          className="absolute bottom-10  right-[500px]"
          height="12"
          viewBox="0 0 136 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Ornament 79"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.350269 11.9916C-0.116756 12.451 -0.116756 13.1959 0.350269 13.6554C0.817294 14.1149 1.57449 14.1149 2.04152 13.6554L13.8803 2.00845C14.3473 1.54899 14.3473 0.804054 13.8803 0.344595C13.4132 -0.114865 12.656 -0.114865 12.189 0.344595L0.350269 11.9916ZM13.8802 11.9916C13.4132 12.451 13.4132 13.1959 13.8802 13.6554C14.3472 14.1149 15.1044 14.1149 15.5715 13.6554L27.4102 2.00845C27.8772 1.54899 27.8772 0.804054 27.4102 0.344595C26.9432 -0.114865 26.186 -0.114865 25.7189 0.344595L13.8802 11.9916ZM27.4102 13.6554C26.9431 13.1959 26.9431 12.451 27.4102 11.9916L39.2489 0.344595C39.7159 -0.114865 40.4731 -0.114865 40.9401 0.344595C41.4072 0.804054 41.4072 1.54899 40.9401 2.00845L29.1014 13.6554C28.6344 14.1149 27.8772 14.1149 27.4102 13.6554ZM40.9401 11.9916C40.4731 12.451 40.4731 13.1959 40.9401 13.6554C41.4071 14.1149 42.1643 14.1149 42.6313 13.6554L54.4701 2.00845C54.9371 1.54899 54.9371 0.804054 54.4701 0.344595C54.0031 -0.114865 53.2459 -0.114865 52.7788 0.344595L40.9401 11.9916ZM54.47 13.6554C54.003 13.1959 54.003 12.451 54.47 11.9916L66.3088 0.344595C66.7758 -0.114865 67.533 -0.114865 68 0.344595C68.467 0.804054 68.467 1.54899 68 2.00845L56.1613 13.6554C55.6943 14.1149 54.9371 14.1149 54.47 13.6554ZM68 11.9916C67.5329 12.451 67.5329 13.1959 68 13.6554C68.467 14.1149 69.2242 14.1149 69.6912 13.6554L81.53 2.00845C81.997 1.54899 81.997 0.804054 81.53 0.344595C81.0629 -0.114865 80.3057 -0.114865 79.8387 0.344595L68 11.9916ZM81.5299 13.6554C81.0629 13.1959 81.0629 12.451 81.5299 11.9916L93.3687 0.344595C93.8357 -0.114865 94.5929 -0.114865 95.0599 0.344595C95.5269 0.804054 95.5269 1.54899 95.0599 2.00845L83.2212 13.6554C82.7541 14.1149 81.9969 14.1149 81.5299 13.6554ZM95.0599 11.9916C94.5928 12.451 94.5928 13.1959 95.0599 13.6554C95.5269 14.1149 96.2841 14.1149 96.7511 13.6554L108.59 2.00845C109.057 1.54899 109.057 0.804054 108.59 0.344595C108.123 -0.114865 107.366 -0.114865 106.899 0.344595L95.0599 11.9916ZM108.59 13.6554C108.123 13.1959 108.123 12.451 108.59 11.9916L120.429 0.344595C120.896 -0.114865 121.653 -0.114865 122.12 0.344595C122.587 0.804054 122.587 1.54899 122.12 2.00845L110.281 13.6554C109.814 14.1149 109.057 14.1149 108.59 13.6554ZM122.12 11.9916C121.653 12.451 121.653 13.1959 122.12 13.6554C122.587 14.1149 123.344 14.1149 123.811 13.6554L135.65 2.00845C136.117 1.54899 136.117 0.804054 135.65 0.344595C135.183 -0.114865 134.425 -0.114865 133.958 0.344595L122.12 11.9916Z"
            fill="#64ADB8"
            fill-opacity="0.66"
          />
        </svg>
        <svg
          width="126"
          className="absolute top-16  right-10"
          height="12"
          viewBox="0 0 136 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Ornament 79"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.350269 11.9916C-0.116756 12.451 -0.116756 13.1959 0.350269 13.6554C0.817294 14.1149 1.57449 14.1149 2.04152 13.6554L13.8803 2.00845C14.3473 1.54899 14.3473 0.804054 13.8803 0.344595C13.4132 -0.114865 12.656 -0.114865 12.189 0.344595L0.350269 11.9916ZM13.8802 11.9916C13.4132 12.451 13.4132 13.1959 13.8802 13.6554C14.3472 14.1149 15.1044 14.1149 15.5715 13.6554L27.4102 2.00845C27.8772 1.54899 27.8772 0.804054 27.4102 0.344595C26.9432 -0.114865 26.186 -0.114865 25.7189 0.344595L13.8802 11.9916ZM27.4102 13.6554C26.9431 13.1959 26.9431 12.451 27.4102 11.9916L39.2489 0.344595C39.7159 -0.114865 40.4731 -0.114865 40.9401 0.344595C41.4072 0.804054 41.4072 1.54899 40.9401 2.00845L29.1014 13.6554C28.6344 14.1149 27.8772 14.1149 27.4102 13.6554ZM40.9401 11.9916C40.4731 12.451 40.4731 13.1959 40.9401 13.6554C41.4071 14.1149 42.1643 14.1149 42.6313 13.6554L54.4701 2.00845C54.9371 1.54899 54.9371 0.804054 54.4701 0.344595C54.0031 -0.114865 53.2459 -0.114865 52.7788 0.344595L40.9401 11.9916ZM54.47 13.6554C54.003 13.1959 54.003 12.451 54.47 11.9916L66.3088 0.344595C66.7758 -0.114865 67.533 -0.114865 68 0.344595C68.467 0.804054 68.467 1.54899 68 2.00845L56.1613 13.6554C55.6943 14.1149 54.9371 14.1149 54.47 13.6554ZM68 11.9916C67.5329 12.451 67.5329 13.1959 68 13.6554C68.467 14.1149 69.2242 14.1149 69.6912 13.6554L81.53 2.00845C81.997 1.54899 81.997 0.804054 81.53 0.344595C81.0629 -0.114865 80.3057 -0.114865 79.8387 0.344595L68 11.9916ZM81.5299 13.6554C81.0629 13.1959 81.0629 12.451 81.5299 11.9916L93.3687 0.344595C93.8357 -0.114865 94.5929 -0.114865 95.0599 0.344595C95.5269 0.804054 95.5269 1.54899 95.0599 2.00845L83.2212 13.6554C82.7541 14.1149 81.9969 14.1149 81.5299 13.6554ZM95.0599 11.9916C94.5928 12.451 94.5928 13.1959 95.0599 13.6554C95.5269 14.1149 96.2841 14.1149 96.7511 13.6554L108.59 2.00845C109.057 1.54899 109.057 0.804054 108.59 0.344595C108.123 -0.114865 107.366 -0.114865 106.899 0.344595L95.0599 11.9916ZM108.59 13.6554C108.123 13.1959 108.123 12.451 108.59 11.9916L120.429 0.344595C120.896 -0.114865 121.653 -0.114865 122.12 0.344595C122.587 0.804054 122.587 1.54899 122.12 2.00845L110.281 13.6554C109.814 14.1149 109.057 14.1149 108.59 13.6554ZM122.12 11.9916C121.653 12.451 121.653 13.1959 122.12 13.6554C122.587 14.1149 123.344 14.1149 123.811 13.6554L135.65 2.00845C136.117 1.54899 136.117 0.804054 135.65 0.344595C135.183 -0.114865 134.425 -0.114865 133.958 0.344595L122.12 11.9916Z"
            fill="#64ADB8"
            fill-opacity="0.66"
          />
        </svg>
      </header>
    </>
  )
}
