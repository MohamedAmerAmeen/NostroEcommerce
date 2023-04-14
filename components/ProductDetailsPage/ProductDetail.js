import {React, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import products from '../../pages/api/products'
import {useRouter} from 'next/router'
const ProductDetail = () => {
  const router = useRouter();
  const ProductId = router.query.ProductID;
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = 'black'
  const [selectedSize, setSelectedSize] = 'SM'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    <>
    {products.Data.filter((x)=>x.id==ProductId).map((product)=>(
      <div key={product.id}>
      <div className="pt-6">
    
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
            <img
              src={product.imageSrc}
              alt={product.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <h1>
            <img
              src={product.imageSrc2}
              alt={product.imageSrc2}
              className="h-full w-full object-cover object-center"
            />
            </h1>
            </div>
            
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0 p-2">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        5 > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">5 out of 5 stars</p>
                <a href='#' className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {product.reviews} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/* { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
              { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
              { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }, */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup value={selectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                  <RadioGroup.Option
                        value='white'
                        className={({ active, checked }) =>
                          classNames(
                            'white',
                            active ? 'ring ring-offset-1' : '',
                            !active ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {'white'}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            'bg-white',
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>

                      <RadioGroup.Option
                        value='white'
                        className={({ active, checked }) =>
                          classNames(
                            'white',
                            active  ? 'ring ring-offset-1' : '',
                            !active ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {'white'}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            'bg-gray-400',
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>




                      <RadioGroup.Option
                        value='white'
                        className={({ active, checked }) =>
                          classNames(
                            'white',
                            active  ? 'ring ring-offset-1' : '',
                            !active  ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {' '}
                          {'white'}{' '}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            'bg-black',
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>

                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <RadioGroup value='xs' className="mt-4">
                  <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                      <RadioGroup.Option
                        value='sm'
                        className={({ active }) =>
                          classNames(
                            2<3
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">Small</RadioGroup.Label>
                            {2<3 ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>


                      <RadioGroup.Option
                        value='sm'
                        className={({ active }) =>
                          classNames(
                            2<3
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">Medium</RadioGroup.Label>
                            {2<3 ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>


                      <RadioGroup.Option
                        value='sm'
                        className={({ active }) =>
                          classNames(
                            2<3
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">Large</RadioGroup.Label>
                            {2<3 ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>


                  </div>
                </RadioGroup>

                
              </div>

              <button
                onClick={(e)=>e.preventDefault()}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>


            
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>


        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Reviews:</p>
            {/* flex flex-row justify-between whitespace-nowrap overflow-x-scroll space-x-5 sm:space-x-5 md:space-x-5 scrollbar-hide */}
            <div className='flex flex-col'>
            <p className='mt-5 text-sm text-gray-700 tracking-wide p-2 border border-gray-700 rounded-lg'>"The Levi's 501 jeans are a classic and timeless piece that everyone should have in their wardrobe. They are durable and well-made, and the fit is perfect. I love the look and feel of these jeans, and they are worth every penny."</p>
            <p className='mt-5 text-sm text-gray-700 tracking-wide p-2 border border-gray-700 rounded-lg'>"The Levi's 501 jeans are a classic and timeless piece that everyone should have in their wardrobe. They are durable and well-made, and the fit is perfect. I love the look and feel of these jeans, and they are worth every penny."</p>
            <p className='mt-5 text-sm text-gray-700 tracking-wide p-2 border border-gray-700 rounded-lg'>"The Levi's 501 jeans are a classic and timeless piece that everyone should have in their wardrobe. They are durable and well-made, and the fit is perfect. I love the look and feel of these jeans, and they are worth every penny."</p>
            <p className='mt-5 text-sm text-gray-700 tracking-wide p-2 border border-gray-700 rounded-lg'>"The Levi's 501 jeans are a classic and timeless piece that everyone should have in their wardrobe. They are durable and well-made, and the fit is perfect. I love the look and feel of these jeans, and they are worth every penny."</p>

            </div>  
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((items)=>(
                  <li className="text-gray-400">
                      <span className="text-gray-600">
                        {items}
                      </span>
                    </li>
                ))}
                      

                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                  <h1 className='text-gray-600 text-sm'>{product.details}</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    ))}
    </>
    
  )
}

export default ProductDetail