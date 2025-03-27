import Image from 'next/image'
import React from 'react'

const InstantSection = () => {
  return (
     <div className='bg-gray-50  py-4 '>
          <div className='grid grid-cols-2 py-4'>
            <div className='flex items-center justify-center order-1  p-4 relative'>
                <Image alt='img' src='/coffee/hand-drawn-circle-highlighting-free-png.webp' width={550} height={400} className='absolute inset-0 z-0 translate-y-30 -rotate-[18deg]' />
                <Image alt='img' src='/coffee/coffee-banner.png' width={200} height={200} className='absolute z-10 -rotate-[15deg] translate-x-[-50%] translate-y-[-3%]' />
                <Image alt='img' src='/coffee/coffee-banner.png' width={200} height={200} className='relative z-20' />
            </div>
            <div className='flex flex-col items-end justify-center p-6 px-16 gap-4 '>
                <h1 className='text-3xl font-bold'>Order Your Favourite Coffee</h1>
                <p className='text-lg text-gray-600 text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vel nostrum nemo maxime odit alias eligendi dolorum unde recusandae voluptas.</p>
                <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                    Order Now
                </button>
            </div>
          </div>
        </div>
  )
}

export default InstantSection
