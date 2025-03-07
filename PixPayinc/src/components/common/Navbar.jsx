import { useEffect, useState } from 'react'
import React from 'react'
import Button from './Button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Customer', href: '#customer' },
    { name: 'Contact Us', href: '#contact' },
  ]
  const handleClick = () => {
    console.log('Button clicked')
  }

  return (
    <nav className="sticky z-50 top-0 bg-[#F5F9FA]">
      <div className="mx-auto px-4 sm:px-[40px] md:px-[100px] lg:px-[124px]">
        <div className="flex h-16 items-center justify-between md:h-17">
          {/* Logo */}
          <div className="leadding-none transition-text flex items-center font-bold duration-300 hover:scale-[1.05]">
            <p>
              <span className="font-timmana-regular text-[24px] tracking-tight text-[#022E40]">
                Pix
              </span>
              <span className="font-timmana-regular text-[24px] tracking-tight text-[#8EC4CD]">
                Pay
              </span>
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-satoshi-variable text-[12px] font-normal tracking-wider text-[#022E40] antialiased transition-all duration-500 ease-in-out hover:text-[#3B97A6]"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Get Started Button */}
          <div className="hidden sm:block">
            <Button variant="filledNoHover" onClick={handleClick}>
              Get Started
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3B97A6] transition-transform duration-300 focus:outline-none"
            >
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  isOpen ? 'rotate-90' : 'rotate-0'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed top-16 left-0 w-full bg-[#F5F9FA] transition-transform sm:ml-6 sm:hidden ${
          isOpen
            ? 'translate-y-0 opacity-100 transition duration-300 ease-out'
            : 'pointer-events-none -translate-y-6 opacity-0 transition duration-300 ease-in'
        }`}
      >
        <div className="divide-y divide-gray-200 overflow-hidden">
          <div className="pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block border-l-4 border-transparent px-4 py-3 font-satoshi-variable text-[12px] font-normal text-[#022E40] transition-colors duration-300 hover:border-[#3B97A6] hover:bg-[#3B97A6]/10 hover:text-[#3B97A6]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="my-2 p-4">
            <Button
              hoverEffect={false}
              onClick={handleClick}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
