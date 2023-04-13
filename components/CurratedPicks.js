import React from 'react'
import Image from 'next/image'
import{ArrowRightCircleIcon}from'@heroicons/react/24/outline'
const CurratedPicks = () => {
  var items = [
    {
        id: 1,
        description: "Upgrade your wardrobe with our chic and versatile fall collection.",
        buttontitle:"Best seller",
        img:"https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?w=1060&t=st=1681027408~exp=1681028008~hmac=7fd771752112e9b1334324e18784c14f1a67b5a0e921d7d23993deff2b225d28"
    },
    {
        id: 2,
        description: "Transform your style with our trendy and affordable winter pieces.",
        buttontitle:"Shop men",
        img:"https://img.freepik.com/free-photo/happy-smiling-short-haired-girl-posing-yellow-wall-warm-colors-positive-mood_273443-1599.jpg?w=1060&t=st=1681027662~exp=1681028262~hmac=5e11402a28b08c40c6f41c3294659737842064d0e7c719d1a2f47015a4d39151"
    },
    {
        id: 3,
        description: "Transform your style with our trendy and affordable winter pieces.",
        buttontitle:"Shop women",
        img:"https://img.freepik.com/free-photo/young-woman-with-colorful-lollipop_155003-5624.jpg?w=1060&t=st=1681027697~exp=1681028297~hmac=d3f6df73047f68feca1d2ea1fd64d24ee04d45fbca0a820191a92b95e7af624a"
    },
    {
      id: 3,
      description: "Transform your style with our trendy and affordable winter pieces.",
      buttontitle:"Shop Casual",
      img:"https://img.freepik.com/free-photo/young-woman-with-colorful-lollipop_155003-5624.jpg?w=1060&t=st=1681027697~exp=1681028297~hmac=d3f6df73047f68feca1d2ea1fd64d24ee04d45fbca0a820191a92b95e7af624a"
  },

]
  return (
    <>
    <h1 className='text-black text-2xl font-bold'>Currated picks</h1>
<div className='flex flex-row justify-between whitespace-nowrap overflow-x-scroll space-x-5 sm:space-x-5 md:space-x-5 scrollbar-hide'>
    {items.map( (item) =>(
            <div key={Math.random()} class="flex flex-row py-10 justify-center items-center">
              <div class={`h-80 w-80 rounded-xl bg-cover bg-center`} style={{ backgroundImage: `url(${item.img})`}}>
                  <div class="w-full h-full flex rounded-xl justify-center items-end pb-10 backdrop-brightness-75">
                          <div className=' hover:scale-105 transition duration-200 hover:bg-gray-100 hover:cursor-pointer ease-in-out flex flex-row text-gray-500 p-3 rounded-md justify-between space-x-5 items-center  bg-white'>
                              <button className='font-semibold font-bold rounded-lg '>{item.buttontitle}</button>
                              <ArrowRightCircleIcon className='h-8 w-8 '/>
                          </div>
                  </div>
              </div>
            </div>
        ))}
</div>
    </>
  )
}

export default CurratedPicks