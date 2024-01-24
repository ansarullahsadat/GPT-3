import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

import Logo from "../assets/GPT-3.png"
import Ilstration from "../assets/Header illustration.png"
import GroupImage from "../assets/Group 81.png"
import { useState } from "react"

function Header() {
  return (
    <header className='py-12 px-6  sm:px-16  bg-gradient-to-br from-[#042c54] to-[#040c18]'>
      <Navbar />
      <HeroSection />
    </header>
  )
}

export default Header

function Navbar() {
  const [toggleMenu, settoggleMenu] = useState(false)

  const Menu = () => {
    return (
      <>
        <li className='hover:text-[#ff8a71] list-none transition-all  duration-300'>
          <a href='#Home'>Home</a>
        </li>
        <li className='hover:text-[#ff8a71] list-none transition-all  duration-300'>
          <a href='#WhatGPT'>What is GPT?</a>
        </li>
        <li className='hover:text-[#ff8a71] list-none transition-all  duration-300'>
          <a href='#OpenAL'>Open Al</a>
        </li>
        <li className='hover:text-[#ff8a71] list-none transition-all  duration-300'>
          <a href='#Case'>Case studies</a>
        </li>
        <li className='hover:text-[#ff8a71] list-none transition-all  duration-300'>
          <a href='#Lib'>Library</a>
        </li>
      </>
    )
  }

  return (
    <nav className='flex items-center justify-between  mx-auto '>
      <div className='flex items-center gap-5'>
        <div className='mr-12'>
          <img src={Logo} alt='Logo' className='object-cover' />
        </div>
        <ul className='hidden lg:flex items-start gap-7    text-white'>
          <Menu />
        </ul>
      </div>
      <div className='flex items-center gap-8'>
        <div className='hidden sm:flex items-center gap-3 text-white '>
          <button className='border border-transparent hover:border-[#ff8a71] py-3 px-6 transition-all duration-300 rounded-lg font-medium shadow-xl'>
            Sign in{" "}
          </button>
          <button className='bg-[#ff4820]  py-3 px-6 rounded-lg font-medium shadow-xl hover:scale-95 hover:shadow-[#ff8a71]/30 transition-all duration-300'>
            Sign up
          </button>
        </div>

        <div className='text-white lg:hidden relative'>
          {toggleMenu ? (
            <RiCloseLine
              size={"27px"}
              cursor={"pointer"}
              onClick={() => settoggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              size={"27px"}
              cursor={"pointer"}
              onClick={() => settoggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className='absolute w-[15rem] right-0 rounded-lg bg-[#031b34]  py-12 z-10 px-12 flex flex-col gap-3 '>
              {<Menu />}

              <div className='flex sm:hidden flex-col  gap-3 text-white '>
                <button className='border border-transparent hover:border-[#ff8a71] py-3 px-6 transition-all duration-300 rounded-lg font-medium shadow-xl'>
                  Sign in{" "}
                </button>
                <button className='bg-[#ff4820]  py-3 px-6 rounded-lg font-medium shadow-xl hover:scale-95 hover:shadow-[#ff8a71]/30 transition-all duration-300'>
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className='grid lg:grid-cols-2  items-center gap-6 lg:gap-12 justify-between  mt-8 '>
      <div>
        <h1 className='gradientColor text-4xl  lg:text-6xl md:leading-[4rem] font-medium mb-8  '>
          Let's Build Something amazing with GPT-3 OpenAl
        </h1>
        <p className='text-[#81afdd]  text-sm md:text-lg'>
          Yet bed any for travelling assistance indulgence unpleasing not
          thougth all exercise blessing. indulgence way everything joy altration
          boisterous the attachment. Party we years to order allow asked of.
        </p>

        <form action='#' className='mt-8 h-[3rem] md:h-[4rem] relative '>
          <input
            type='email'
            id='email'
            className='w-full h-full outline-none px-6 rounded-lg shadow-lg shadow-[#031b34]/30 text-[#81afdd] bg-[#042c54] '
            placeholder='Your Email Address'
            required
          />
          <button className=' h-full absolute top-0 right-0 bg-[#ff4820] rounded-r-lg text-white text-base font-medium px-6 hover:scale-105 transtition-all duration-300'>
            Get Started
          </button>
        </form>

        <div className='flex items-center gap-6 mt-8'>
          <img
            src={GroupImage}
            alt='groupimage'
            className='object-cover w-28 md:w-44'
          />

          <p className='text-xs text-slate-100'>
            1.600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div>
        <img
          src={Ilstration}
          alt='ilstration'
          className='mx-auto lg:ml-auto w-[24rem]  xl:w-[40rem] h-[24rem] md:h-[30rem] xl:h-[40rem] object-cover'
        />
      </div>
    </section>
  )
}
