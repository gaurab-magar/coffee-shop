import Image from 'next/image'
import React from 'react'
import Button from './Button';
import Layout from './Layout';
const InstantSection = () => {
  return (
    <Layout>
    <div className='bg-gray-50'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 py-4 gap-4'>
            <div className="flex items-center justify-center order-1 p-4 sm:px-6 relative">
              <div className="relative w-[200px] sm:w-[100px] md:w-[300px] lg:w-[400px] aspect-[4/3]">
                <Image
                  alt="circle"
                  src="/coffee/hand-drawn-circle-highlighting-free-png.webp"
                  fill
                  className="object-contain absolute inset-0 z-0 -rotate-[18deg]"
                />
                <Image
                  alt="coffee"
                  src="/coffee/coffee-banner.png"
                  fill
                  className="object-contain absolute z-10 -rotate-[15deg] translate-x-[-25%] translate-y-[-5%] hidden md:block" 
                />
                <Image
                  alt="coffee"
                  src="/coffee/coffee-banner.png"
                  fill
                  className="object-contain relative z-20"
                />
              </div>
            </div>
            <div className='flex flex-col md:items-end sm:items-center justify-center p-6 sm:px-4 md:px-16 gap-4 sm:text-center'>
                <h1 className='text-3xl font-bold'>Order Your Favourite Coffee</h1>
                <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vel nostrum nemo maxime odit alias eligendi dolorum unde recusandae voluptas.</p>
                <Button label="Order Now" />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default InstantSection
