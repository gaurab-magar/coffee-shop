import Image from 'next/image'
import React from 'react'

const Explore = () => {
  return (
    <div className='bg-gray-50 py-8 flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-3xl font-bold text-center'>Explore Our Alowishus</h1>
            <p className='text-lg text-center text-gray-500'>A drink from the 'My Alowishus' bottled brews range or grab one of our delecious.</p>
        </div>
        <div className='grid grid-cols-3 gap-12 my-4'>
            <div className="p-8 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-2xl shadow-lg bg-gradient-to-b from-[#fdfaf5] to-[#f1e8dc] transition-transform hover:scale-105 hover:shadow-xl duration-300">
                <Image
                    alt="Sweet coffee"
                    src="/coffee/icon1.png"
                    width={100}
                    height={100}
                    className="rounded-full shadow-sm bg-gray-50"
                />
                <h2 className="text-xl font-semibold text-gray-800">Our Catering</h2>
                <p className="text-center text-sm text-gray-600 px-2">
                    Lorem ipsum dolor sit amet. <br /> Have sweet coffee with us.
                </p>
                <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                    Download App
                </button>
            </div>
            <div className="p-8 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-2xl shadow-lg bg-gradient-to-b from-[#fdfaf5] to-[#f1e8dc] transition-transform hover:scale-105 hover:shadow-xl duration-300">
                <Image
                    alt="Sweet coffee"
                    src="/coffee/icon2.png"
                    width={100}
                    height={100}
                    className="rounded-full shadow-sm bg-gray-50"
                />
                <h2 className="text-xl font-semibold text-gray-800">Our Catering</h2>
                <p className="text-center text-sm text-gray-600 px-2">
                    Lorem ipsum dolor sit amet. <br /> Have sweet coffee with us.
                </p>
                <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                    Download App
                </button>
            </div>
            <div className="p-8 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-2xl shadow-lg bg-gradient-to-b from-[#fdfaf5] to-[#f1e8dc] transition-transform hover:scale-105 hover:shadow-xl duration-300">
                <Image
                    alt="Sweet coffee"
                    src="/coffee/icon3.png"
                    width={100}
                    height={100}
                    className="rounded-full shadow-sm bg-gray-50"
                />
                <h2 className="text-xl font-semibold text-gray-800">Our Catering</h2>
                <p className="text-center text-sm text-gray-600 px-2">
                    Lorem ipsum dolor sit amet. <br /> Have sweet coffee with us.
                </p>
                <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                    Download App
                </button>
            </div>
        </div>
    </div>
  )
}

export default Explore
