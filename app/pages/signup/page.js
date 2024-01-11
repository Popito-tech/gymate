import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import React from 'react'

function Page() {
  return (
    <>
    <Navbar/>
      <section className="login-section ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>
        {/* form  */}
        <div className="py-[10rem] flex justify-center page-padding">
          <form

            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            <label className="text-[2rem] text-white mb-3 font-medium ">
              Email
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="gymate@gymail.com"
              type="email"

            ></input>

            <label className="text-[2rem] text-white mb-3 font-medium outline-[#ff0336] outline-2">
              Password
            </label>
            <input
              className="text-[1.7rem] px-8 py-4 mb-10 w-full outline-[#ff0336] "
              placeholder="password"
              type="password"

            ></input>

            <button
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </button>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have account?</p>
              <div

                className="text-[#ff0336] font-bold text-[1.5rem]"
              >
                Sign In
              </div>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              ( Make <span className="text-[#ff0336]">new Accout</span> or go to
              <span className="text-[#ff0336]"> Sign In</span> Page for Test
              Account )
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Page