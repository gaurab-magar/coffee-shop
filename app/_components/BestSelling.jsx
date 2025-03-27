import Image from 'next/image'
import React from 'react'

const BestSelling = () => {
  return (
     <div className='bg-white py-8 flex flex-col items-center justify-center gap-4'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <h1 className='text-3xl font-bold text-center'>Best Selling Coffee</h1>
                <p className='text-lg text-center text-gray-500'>A drink from the 'My Alowishus' bottled brews range or grab one of our delecious.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 mx-auto p-4 my-4 w-10/12'>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-md shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300">
                    <div className='flex items-center justify-center'>
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid1.png"
                            width={150}
                            height={150}
                        />
                        <div>
                            <p className='text-gray-600 font-extralight'>#1 selling</p>
                            <h2 className='text-gray-800 text-3xl font-bold text-start'>Double Expresso</h2>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 px-2">
                       ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum, non deleniti corrupti dignissimos reiciendis placeat alias.
                    </p>
                    <div className='flex gap-4 items-center'>
                       <h1 className='text-lg text-gray-400 font-light'>$12.20</h1>
                        <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                            Download App
                        </button>
                    </div>
                </div>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-md shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300">
                    <div className='flex items-center justify-center'>
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid2.png"
                            width={150}
                            height={150}
                        />
                        <div>
                            <p className='text-gray-600 font-extralight'>#1 selling</p>
                            <h2 className='text-gray-800 text-3xl font-bold text-start'>Double Expresso</h2>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 px-2">
                       ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum, non deleniti corrupti dignissimos reiciendis placeat alias.
                    </p>
                    <div className='flex gap-4 items-center'>
                       <h1 className='text-lg text-gray-400 font-light'>$12.20</h1>
                        <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                            Download App
                        </button>
                    </div>
                </div>
                <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-md shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300">
                    <div className='flex items-center justify-center'>
                        <Image
                            alt="Sweet coffee"
                            src="/coffee/mid3.png"
                            width={150}
                            height={150}
                        />
                        <div>
                            <p className='text-gray-600 font-extralight'>#1 selling</p>
                            <h2 className='text-gray-800 text-3xl font-bold text-start'>Double Expresso</h2>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 px-2">
                       ipsum dolor sit amet consectetur adipisicing elit. Cum enim inventore assumenda laborum, non deleniti corrupti dignissimos reiciendis placeat alias.
                    </p>
                    <div className='flex gap-4 items-center'>
                       <h1 className='text-lg text-gray-400 font-light'>$12.20</h1>
                        <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
                            Download App
                        </button>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default BestSelling
