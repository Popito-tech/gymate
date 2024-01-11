import React from 'react'
import PricingBox from './PricingBox'

function Pricing() {
  return (
    <section id="pricing" className="pricing-section relative">
    <div className="container page-padding py-[12rem] ">
      <img src='/images/pricing/bg-text.png' className="left-0 absolute" alt="bg_img" />
      {/* title div -- */}
      <div className="flex flex-col text-center relative items-center">
        <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
          PRICING CHART
        </p>
        <img
          src='/images/who-we-are/title-bg.svg'
          alt="text_bg"
          className="w-[23rem] absolute -top-[10px] "
        />

        <h2 className="text-[3.4rem] font-bold mb-4">
          Exclusive Pricing Plan
        </h2>
        <p className="text-[#646464] font-medium text-[15px] ">
          Gymat an unknown printer took a galley of type and scrambled
          <br /> make a type specimen book.
        </p>
      </div>
      {/* pricing boxes */}
      <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
        <PricingBox img='/images/pricing/img1.jpg' price="39" />
        <PricingBox img='/images/pricing/img2.jpg' price="65" />
        <PricingBox img='/images/pricing/img3.jpg' price="100" />
      </div>
      <img
        src='/images/pricing/bg-dumbell.png'
        alt="bg_icon"
        className="right-0 bottom-0 absolute z-[1]"
      />
    </div>
  </section>
  )
}

export default Pricing