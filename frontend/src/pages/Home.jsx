import React from 'react'
import { assets } from '../assets/assets'

const home = () => {
  return (
    <div className='flex flex-col p-4 gap-5 ' >
      <div className='flex items-center justify-between bg-blue-100  rounded-3xl' >
        <img className='rounded-3xl h-100' src={assets.joinUs1} alt="" />
        <div>
          <h1 className=' p-4 m-4'>Unlocking Dreams Through Education</h1>
          <p className=' p-4 m-4'>
            Every child has potential. We’re here to make sure no child’s dreams are limited by poverty or lack of access. Join us in empowering underprivileged children with the gift of education and a future full of possibilities.
          </p>
        </div>
      </div>


      <div className='flex items-center justify-between bg-amber-100 rounded-3xl '>
        <p className=' p-4 m-4 w-2/5 '>Education is the most powerful weapon which you can use to change the world.</p>
        <img className='rounded-3xl w-3/5 h-100' src={assets.home2} alt="" />
      </div>


      <div className='flex items-center justify-between bg-blue-100  rounded-3xl'>
        <img className='rounded-3xl' src={assets.home3} alt="" />
        <p className=' p-4 m-4'>Every child deserves a champion—an adult who will never give up on them</p>
      </div>

      <div className='flex items-center justify-between bg-gray-400 rounded-3xl'>
        <p className=' p-4 m-4'>If we want to reach real peace in this world, we should start educating children</p>
        <img className='rounded-3xl h-100 w-3/5' src={assets.home4} alt="" />
      </div>
    </div>
  )
}

export default home