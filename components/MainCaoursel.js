import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {HomeIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'

const MainCaoursel = () => {
    var items = [
        {
            id: 1,
            description: "Upgrade your wardrobe with our chic and versatile fall collection.",
            img:"https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?w=1060&t=st=1681027408~exp=1681028008~hmac=7fd771752112e9b1334324e18784c14f1a67b5a0e921d7d23993deff2b225d28"
        },
        {
            id: 2,
            description: "Transform your style with our trendy and affordable winter pieces.",
            img:"https://img.freepik.com/free-photo/happy-smiling-short-haired-girl-posing-yellow-wall-warm-colors-positive-mood_273443-1599.jpg?w=1060&t=st=1681027662~exp=1681028262~hmac=5e11402a28b08c40c6f41c3294659737842064d0e7c719d1a2f47015a4d39151"
        },
        {
            id: 3,
            description: "Transform your style with our trendy and affordable winter pieces.",
            img:"https://img.freepik.com/free-photo/young-woman-with-colorful-lollipop_155003-5624.jpg?w=1060&t=st=1681027697~exp=1681028297~hmac=d3f6df73047f68feca1d2ea1fd64d24ee04d45fbca0a820191a92b95e7af624a"
        },

    ]
  return (
    <Carousel>
        {items.map( (item) =>(
            <div class="flex py-10 justify-center items-center flex-col ">
            <div class={`h-96 w-full rounded-lg bg-cover bg-center`} style={{ backgroundImage: `url(${item.img})`}}>
                <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <div className='flex flex-col items-center'>
                            <span class="text-white text-4xl w-1/2 text-center">{item.description}</span>
                            <button className='text-black bg-white px-4 py-2 mt-2 rounded-lg'>Shop Now</button>
                        </div>
                </div>
                </div>
            </div>
        ))}
    </Carousel>
  )
}
export default MainCaoursel