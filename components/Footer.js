import React from 'react'

const Footer = () => {
  return (
      <div className='flex justify-around mt-16 items-center shadow-2xl p-5'>
        <div className='space-y-2 cursor-pointer'>
        <p className='hidden sm:block md:block lg:block xl:block text-gray-800 font-bold text-3xl cursor-pointer hover:scale-110 transation duration-100 ease-in-out'>N<span className='text-2xl underline'>O</span>STRA</p>
        </div>
        <div className='space-y-2 cursor-pointer'>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>About Us</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Privacy Policy</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Terms of use</p>
        </div>
        <div className='space-y-2 cursor-pointer'>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Copyright information</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>FAQs</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Awards</p>
        </div>
        <div className='space-y-2 cursor-pointer'>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Contact Us</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Return Policy</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Partner Ships</p>
        </div>
        <div className='space-y-2 cursor-pointer'>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Site Map</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Terms & Conditions</p>
          <p className='hover:scale-110 transation duration-100 ease-in-out'>Social Media</p>
        </div>
      </div>
    
  )
}

export default Footer