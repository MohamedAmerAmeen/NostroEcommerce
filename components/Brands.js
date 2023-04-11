import React from 'react'
import Image from 'next/image'
import Adidas from '../assets/Adidas.png'
import DG from '../assets/DG.png'
import GA from '../assets/GA.png'
import Gucci from '../assets/Gucci.png'
import LV from '../assets/LV.jpg'
import Mango from '../assets/Mango.png'
import Nike from '../assets/Nike.png'
import Prada from '../assets/Prada.png'
import scrollbarHide from 'tailwind-scrollbar-hide'
const Brands = () => {
  return (
    <>
    <h1 className='text-slate-900 text-3xl font-bold'>Brands</h1>
    <div className='flex flex-row whitespace-nowrap p-10 space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
      <Image src={Adidas} width={100} height={50}/>
      <Image src={DG} width={100} height={50}/>
      <Image src={GA} width={100} height={50}/>
      <Image src={Gucci} width={100} height={50}/>
      <Image src={LV} width={100} height={50}/>
      <Image src={Mango} width={100} height={50}/>
      <Image src={Nike} width={100} height={50}/>
      <Image src={Prada} width={100} height={50}/>

    </div>
    </>
  )
}

export default Brands