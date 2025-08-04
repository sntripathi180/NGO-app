import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex items-center justify-between flex-col h-full w-full text-white'>
        <h2 className='text-3xl p-8'>
            We are working on it
        </h2>
        
        <p  className='text-xl p-8'>Explore our <Link className='text-blue-500 ' to="/">Home</Link></p>
    </div>
  )
}

export default ErrorPage