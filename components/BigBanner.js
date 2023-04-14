import React from 'react'
import Image from 'next/image'
import {EnvelopeIcon} from '@heroicons/react/24/outline'
const BigBanner = () => {
  return (
    <>
    <div className='hidden mt-20 flex w-full bg-gray-800 rounded-xl'>
        <Image alt='' className=' rounded-xl' src='https://img.freepik.com/free-photo/young-woman-with-colorful-lollipop_155003-5624.jpg?w=1060&t=st=1681027697~exp=1681028297~hmac=d3f6df73047f68feca1d2ea1fd64d24ee04d45fbca0a820191a92b95e7af624a' width={600} height={600}/>
        <div className=' text-white p-16'>
            <p className='text-gray-200 text-lg tracking-wider mb-3'>Limited offer</p>
            <p className='text-6xl'>35% off only this friday and get special gift</p>
            <button className='mt-5 px-3 py-5 rounded-lg text-lg bg-white hover:bg-gray-200 text-black'>Grab it now </button>
        </div>
    </div>

    <div className='flex justify-center mt-20 text-4xl text-center'>
        <h1 className='text-xl  w-full sm:w-1/2 sm:text-2xl md:w-2/3 md:text-4xl lg:w-1/2 lg:text-4xl font-semibold text-gray-800'>subscribe to our newsletter to get updates to our latest collections</h1>
    </div>
    <div className='flex justify-center mt-5 items-center'>
        <div className='bg-white py-3 px-3 rounded-l-xl'>
          <EnvelopeIcon className='h-6 w-6'/>
        </div>
        <input className='py-3' placeholder='Enter your email' type='email'/>
        <button className='px-3 py-3 bg-slate-900 text-white rounded-r-xl'>Subscribe</button>
      
    </div>
    </>
  )
}

export default BigBanner