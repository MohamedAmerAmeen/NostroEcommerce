import React from 'react'
import {CurrencyDollarIcon,UserIcon,ShoppingCartIcon,RocketLaunchIcon} from '@heroicons/react/24/outline'

const CustomerExp = () => {
  return (
    <div className='py-20'>
      <div className='flex justify-between items-center'>
        <h1 className='text-slate-900 text-3xl font-bold text-center'>We Provide Best Customer Experience</h1>
        <p className='text-gray-500 hidden sm:hidden md:hidden lg:block'>We ensure our customers have the best shopping experience</p>
      </div>

      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between py-10'>
        
        <div  className='hover:bg-gray-300 p-2 rounded-xl'>
          <CurrencyDollarIcon className='h-14 w-14 bg-gray-300 p-3 rounded-lg'/>
          <h1 className='text-xl'>Original Products</h1>
          <p className='text-gray-400 w-80'>We provide money back gurantee if the product is not original.</p>
        </div>

        <div className='hover:bg-gray-300 p-2 rounded-xl'>
          <UserIcon className='h-14 w-14 bg-gray-300 p-3 rounded-lg'/>
          <h1 className='text-xl'>Satisfaction Guarantee</h1>
          <p className='text-gray-400 w-80'>We provide money back gurantee if the product is not original.</p>
        </div>


        <div className='hover:bg-gray-300 p-2 rounded-xl'>
          <ShoppingCartIcon className='h-14 w-14 bg-gray-300 p-3 rounded-lg'/>
          <h1 className='text-xl'>New Arrival Everyday</h1>
          <p className='text-gray-400 w-80'>We update our collection almost everyday.</p>
        </div>


        <div className='hover:bg-gray-300 p-2 rounded-xl md:block lg:hidden xl:block'>
          <RocketLaunchIcon className='h-14 w-14 bg-gray-300 p-3 rounded-lg'/>
          <h1 className='text-xl'>Fast & Free Shipping</h1>
          <p className='text-gray-400 w-80'>We offer fast & free shipping anywhere.</p>
        </div>

      </div>
    </div>
  )
}

export default CustomerExp