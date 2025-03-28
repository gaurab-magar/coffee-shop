import React from 'react'

const Title = (props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-3xl font-bold text-center'>{props.title}</h1>
        <p className='text-lg text-center text-gray-500'>{[props.desc]}</p>
    </div>
  )
}

export default Title
