import React from 'react'

const Products = () => {
  return (
    <div>
        <div>
            <p className='leading-relaxed text-6xl text-center font-bold pt-10'>Choose your best headphone<br/>
            <span className='bg-gradient-to-r from-orange-300 via-red-500 to-blue-300 inline text-transparent bg-clip-text'>Enjoy your moment</span></p>
        </div>
        <ul className='flex mt-16 justify-evenly'>
            <li className='w-72 h-96'>
                <img className="rounded-md w-full h-full" src="src/assets/headphone1.jpg" alt="" />
                <p className='text-center mt-2 font-semibold'>Headphone A</p>
                <p className='text-center mt-2 text-sm text-gray-500'>1000 HKD</p>
            </li>
            <li className='w-72 h-96'>
                <img className="rounded-md w-full h-full" src="src/assets/headphone2.jpg" alt="" />
                <p className='text-center mt-2 font-semibold'>Headphone B</p>
                <p className='text-center mt-2 text-sm text-gray-500'>1500 HKD</p>
            </li>
            <li className='w-72 h-96'>
                <img className="rounded-md w-full h-full" src="src/assets/headphone3.jpg" alt="" />
                <p className='text-center mt-2 font-semibold'>Headphone C</p>
                <p className='text-center mt-2 text-sm text-gray-500'>1200 HKD</p>
            </li>
        </ul>
    </div>
      
  )
}

export default Products
