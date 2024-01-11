import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import Pricing from '@/app/component/Pricing'
import React from 'react'

function Page() {
  return (
    <>
    <Navbar/>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Pricing
          </h1>
        </div>
        <Pricing />
        <Footer />
      </section>
    </>
  )
}

export default Page