import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Title from './Title'
import Layout from './Layout'

const BestSelling = () => {
  return (
    <Layout>
        <div className='bg-white py-8 flex flex-col items-center justify-center gap-4'>
                <Title title="Best Selling Coffee" desc="A drink from the 'My Alowishus' bottled brews range or grab one of our delecious."/>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-4 my-4 w-10/12'>
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
                        <Button label="Download Now" />
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
                        <Button label="Download App" />
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
                        <Button label="Download Now" />
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export default BestSelling
