import Image from 'next/image'
import React from 'react'

const Card = (props) => {
  return (
    <div className="py-6 px-4 flex flex-col items-center justify-center gap-4 border border-neutral-200 rounded-md shadow-lg bg-gradient-to-b from-gray-100 to-white transition-transform hover:scale-105 hover:shadow-xl duration-300">
        <div className='flex items-center justify-center'>
            <Image
                alt="Sweet coffee"
                src={`/coffee/${props}`}
                width={150}
                height={150}
            />
            <div>
                <p className='text-gray-600 font-extralight'>{props}</p>
                <h2 className='text-gray-800 text-3xl font-bold text-start'>{props}</h2>
            </div>
        </div>
        <p className="text-center text-gray-600 px-2">
            {props}
        </p>
        <div className='flex gap-4 items-center'>
            <h1 className='text-lg text-gray-400 font-light'>{props}</h1>
            <button className="mt-2 bg-gray-900 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all">
               {props}
            </button>
        </div>
    </div>
  )
}

export default Card
