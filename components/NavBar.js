import React from 'react'
import {ShoppingCartIcon, UserIcon,MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
const NavBar = () => {
  return (
    <nav className='py-4 shadow-sm flex flex-row justify-between m-auto items-center'>
        <div>
            <p className='text-slate-900 font-bold text-3xl cursor-pointer'>N<span className='text-2xl underline'>O</span>STRA</p>
        </div>
        <div>
            <ul className='flex flex-row space-x-10 text-slate-900'>
                <Link className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 hover:text-slate-950' href={'/'}>Shop</Link>
                <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 hover:text-slate-950'>Most Wanted</li>
                <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 hover:text-slate-950'>New Arrival</li>
                <li className='cursor-pointer transation-all duration-100 ease-in hover:scale-110 hover:text-slate-950'>Brands</li>
            </ul>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className='flex items-center bg-white rounded-md'>
            <MagnifyingGlassIcon className='h-5 w-5 m-2 text-gray-400 cursor-pointer'/>
            <input className='p-1' type='text' placeholder='search'/>
            </div>
            <ShoppingCartIcon className='h-5 w-5 text-slate-900 hover:animate-bounce'/>
            <UserIcon className='h-5 w-5 text-slate-900 hover:animate-bounce'/>
        </div>
    </nav>
  )
}

export default NavBar