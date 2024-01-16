'use client'
import React, { useState } from 'react'
import UserSVG from '../svg/UserSVG'
import MenuSVG from '../svg/MenuSVG'
import Link from 'next/link';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [sidebar, setSideBar] = useState(false);
      // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== 'undefined') {
    // Add the event listener only in a browser environment
    window.addEventListener("scroll", handleScroll);
  }

    // sidebar
    const sideBar = () => {
      setSideBar(!sidebar);
      console.log(sidebar)
    };

    // hamburger menu
    const hamburgerMenu = () => {
      setHamburger(!hamburger);
    };

  return (
    <div className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full
    text-white z-50 ${
      sticky ? "shadow-xl !bg-black" : ""
    }`}>

        <img src='/images/logo/logo.svg' alt="logo_img"/>

        <div className='flex flex-row space-x-7 md1200:hidden'>
            <Link href='/'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Home</p></Link>
            <Link href='/pages/about'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>About</p></Link>
            <Link href='/pages/gallery'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Gallery</p></Link>
            <Link href='/pages/schedule/monday'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Schedule</p></Link>
            <Link href='/pages/blog'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Blog</p></Link>
            <Link href='/pages/pricing'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Pricing</p></Link>
            <Link href='/pages/classes'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Classes</p></Link>
            <Link href='/pages/contact'><p className='hover:text-redTheme hover:cursor-pointer text-3xl'>Contact</p></Link>
            
            
            
            
            
            
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* start hamburger menu truc */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? "" : "hidden"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center text-black flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <a
                    onClick={() => window.top(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/about'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"

                  >
                    About
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/schedule/monday'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                  >
                    Schedule
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/gallery'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/blog'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/contact'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/pricing'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link href='/pages/classes'
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"

                  >
                    Classes
                  </Link>
                </li>
              </ul>
            </div>
      {/* end hamburger menu truc */}
            {/* sidebar */}

            <div>
            <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 
                z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  sidebar ? "" : "hidden"
                }`}
              >
                {/* logo & X */}
                <div className="flex justify-between items-center">
                  <img src='/images/logo/logo-footer.svg' alt="logo_img" className="w-[13rem]" />
                  <i
                    onClick={sideBar}
                    className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                  ></i>
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold text-black">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold text-black">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src='/images/sidebar/1.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src='/images/sidebar/2.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src='/images/sidebar/3.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src='/images/sidebar/4.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src='/images/sidebar/5.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src='/images/sidebar/6.jpg'
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold text-black">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                    &nbsp; 59 Street, House Newyork City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-phone text-[#ff0336]"></i>&nbsp;
                    +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                    &nbsp; gymate@gymail.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold text-black">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[12px] cursor-pointer">
                      <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                      <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <div className='hidden md1200:block'><i
              onClick={hamburgerMenu}
              className="fa-bars fa-solid hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i></div>
            {/* account */}

            {/* sidebar */}
            <i
              onClick={sideBar}
              className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            ></i>
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              href='/pages/classes'
              className="flex items-center "
            >
              <i
                className='fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md'
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
    </div>

  )
}

export default Navbar

{/* <div className='flex flex-row space-x-7 items-center'>
<UserSVG />
<MenuSVG />
<div className="flex flex-row items-center border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
  <i
    className='fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md '
  ></i>
  <h3 className="text-white text-[14px]  font-bold uppercase ml-4 mr-8 tracking-wider">
    join class now
  </h3>

</div>
</div> */}
