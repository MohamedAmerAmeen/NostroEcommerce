import React from 'react'
import { MagnifyingGlassCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import products from '../pages/api/products';
const FeaturedProducts = () => {
  const router=useRouter();
  return (
    <>
    <h1 className='text-black text-2xl font-bold'>Featured products</h1>

    <div>
      <div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.Data.map((product) => (
            <div key={product.id} className="group relative">
              <div onClick={()=>router.push(`/productsDetails/?ProductID=${product.id}`)} className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:cursor-pointer lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.name}
                  </h3>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                  <div className='bg-slate-900 rounded-md'>
                    <button className=' bg-slate-900 p-2 rounded-lg' >
                      <ShoppingCartIcon className='h-5 w-8 hover:scale-125 transation duration-200 ease-in-out text-white'/>
                    </button>

                    <button className=' bg-slate-900 p-2 rounded-lg' onClick={()=>router.push(`/productsDetails/?ProductID=${product.id}`)}>
                      <MagnifyingGlassIcon className='h-5 w-8 hover:scale-125 transation duration-200 ease-in-out text-white'/>
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default FeaturedProducts