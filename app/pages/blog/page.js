import BlogBox2 from '@/app/component/BlogBox2'
import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import React from 'react'

function Page() {
  return (
    <>
    <Navbar/>
    <section>
    <div className="login-banner relative justify-center flex">
      <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
        Blog
      </h1>
    </div>
    {/* blog */}
    <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
      {/* blog */}
      <div className="flex flex-col gap-28">
        <BlogBox2 img='/images/blogpage/1.jpg' title="Yoga For Everyone in 2022" />
        <BlogBox2
          img='/images/blogpage/2.jpg'
          title="Getting Back Into CrossFit After Vacation"
        />
        <BlogBox2 img='/images/blogpage/3.jpg' title="Meet Fitness Ambassador Grace" />
        <BlogBox2 img='/images/blogpage/4.jpg' title="The Best are European Materls Direct" />
        <BlogBox2
          img='/images/blogpage/5.jpg'
          title="Give your Fitness a Boost with our Gym"
        />
        <BlogBox2
          img='/images/blogpage/6.jpg'
          title="How to Get Fit Your Kids Moving Throughout The Summer"
        />
        <BlogBox2
          img='/images/blogpage/7.jpg'
          title="Give your fitness a boost with our new gym challenge"
        />
      </div>

      {/* sidebar */}
      <div>
        {/* form */}
        <form className="flex">
          <input
            className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
            type="search"
            placeholder="Search..."
          ></input>
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
          </button>
        </form>

        {/* categories */}
        <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
          <p className="text-[18px] text-black font-bold mb-5">
            Categories
          </p>
          <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
          <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
            <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                &nbsp; Body Building
              </p>
              <span>(4)</span>
            </li>

            <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                &nbsp; Boxing
              </p>
              <span>(4)</span>
            </li>

            <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                &nbsp; Crossfit
              </p>
              <span>(4)</span>
            </li>

            <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                &nbsp; Fitness
              </p>
              <span>(4)</span>
            </li>

            <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px] fa-solid fa-chevron-right"></i>
                &nbsp; Meditation
              </p>
              <span>(4)</span>
            </li>

            <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
              <p>
                <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                &nbsp; Yoga
              </p>
              <span>(4)</span>
            </li>
          </ul>
        </div>
        {/* recent posts */}
        <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
          <p className="text-[18px] text-black font-bold mb-5">
            Recent Posts
          </p>
          <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
          <div className="flex flex-col gap-7">
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent1.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  Yoga For Everyone in 2022
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent2.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  Getting Back Into CrossFit
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent3.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  Meet Fitness Abassador Grace
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent4.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  The best are European Meditation Practitioner
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent5.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  Learn Boxing With Our Trainer John
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-8">
              <img src='/images/blogpage/recent6.jpg' alt="recent_img" className="w-[10rem]" />
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-[14px] text-[#646464] font-medium">
                  March 22, 2022
                </p>
                <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                  How To Get Lean For The Summer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* popular tags */}
        <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
          <p className="text-[18px] text-black font-bold mb-5">
            Popular Tags
          </p>
          <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
          <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Crossfit
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Fitness
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Gym
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Meditation
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Running
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Workout
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Yoga
            </p>
            <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
              #Boxing
            </p>
          </div>
        </div>
        {/* banner */}
        <div className="blog-banner w-full h-[56rem] relative">
          <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
            gymat
          </p>
          <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
          <div className="text-white flex flex-col absolute top-[10rem] left-10">
            <p className="text-[64px] font-bold">34%</p>
            <p className="text-[20px] font-bold -mt-[10px]">
              Flat Discount
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
  </>
  )
}

export default Page