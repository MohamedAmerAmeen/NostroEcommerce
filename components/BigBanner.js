import React from 'react'
import Image from 'next/image'
const BigBanner = () => {
  return (
    <>
    <div className='mt-20 flex  w-full bg-gray-800 rounded-xl'>
        <Image alt='' className=' rounded-xl' src='https://img.freepik.com/free-photo/young-woman-with-colorful-lollipop_155003-5624.jpg?w=1060&t=st=1681027697~exp=1681028297~hmac=d3f6df73047f68feca1d2ea1fd64d24ee04d45fbca0a820191a92b95e7af624a' width={600} height={600}/>
        <div className=' text-white p-16'>
            <p className='text-gray-200 text-lg tracking-wider mb-3'>Limited offer</p>
            <p className='text-6xl'>35% off only this friday and get special gift</p>
            <button className='mt-5 px-3 py-5 rounded-lg text-lg bg-white hover:bg-gray-200 text-black'>Grab it now </button>
        </div>
    </div>

    <div className='flex  justify-center mt-20 text-4xl text-center'>
        <h1 className='w-1/2 wid font-semibold text-gray-800'>subscribe to our newsletter to get updates to our latest collections</h1>
    </div>
    <div className='flex justify-center mt-5'>
        <input className='px-16 py-3 rounded-lg' placeholder='Enter your email' type='text'/>
        <button className='px-6 py-3 rounded-lg text-white bg-gray-800'>Subscribe</button>
    </div>
    </>
  )
}

export default BigBanner