import Image from 'next/image'
import React from 'react'

const OrderCoffee = () => {
  return (
    <div className='bg-gray-50  py-4'>
      <div className='grid grid-cols-2 py-4'>
        <div className='flex items-center justify-end'>
            <Image alt='img' src='/coffee/coffee-mid.png' width={500} height={500} className='' />
        </div>
        <div className='flex flex-col items-start justify-center p-6 gap-4'>
            <h1 className='text-3xl font-bold'>Order Your Favourite Coffee</h1>
            <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem vel nostrum nemo maxime odit alias eligendi dolorum unde recusandae voluptas.</p>
            <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                Order Now
            </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCoffee
