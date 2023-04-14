import React from 'react'
import Link from 'next/link'
const SideBar = () => {
  return (
    <div className='p-10 bg-slate-900 text-white px-24'>
      <ul className='flex flex-col text-xl space-y-5 '>
        <Link className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 ' href={'/'}>Shop</Link>
        <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 '>Most Wanted</li>
        <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 '>New Arrival</li>
        <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 '>Brands</li>
      </ul>
    </div>
  )
}

export default SideBar