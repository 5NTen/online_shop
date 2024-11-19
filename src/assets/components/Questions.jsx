import React from 'react'

const Questions = () => {
  return (
    <div className='w-full px-16'>
    <hr />
    <div className='flex w-full justify-evenly mt-16 items-center py-16'>
        <div>
            <p className='text-[#0D92F4] text-center mb-10 text-6xl font-bold'>Why choose us?</p>
            <img className='w-96 h-64 rounded-md ' src="src/assets/Questions.jpg" alt="" />
        </div>

        <div className='block w-96 rounded-md shadow p-6'>
            <p className='mb-2 text-[#F31559] w-96 h-8 font-semibold text-xl'>High Quality Products</p>
            <p className='mb-4 text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p className='mb-2 text-[#F31559] w-96 h-8  font-semibold text-xl'>Warranty</p>
            <p className='mb-4 text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum perferendis adipisci nemo!</p>
            <p className='mb-2 text-[#F31559] w-96 h-8  font-semibold text-xl'>Customer Service</p>
            <p className='mb-4 text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    </div>
  )
}

export default Questions
