import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='w-full flex p-1 items-center justify-between border'>
        <BiHeadphone className='w-12 h-12 ml-2'/>
        <div className='flex items-center border rounded-full shadow px-4'>
            <CiSearch className='p-1 w-7 h-7'/>
            <input className='w-96 h-8 indent-6 focus:outline-none' type="search" placeholder='search'/>
        </div>
        <ul className='flex items-center space-x-8 font-semibold text-sm'>
            <a href="">Shop</a>
            <a href="">Products</a>
            <a href="">New Arrivals</a>
            <a href="">Sales</a>
        </ul>
        <div className='justify-self-end flex space-x-8 mr-2'>
            <CiShoppingCart className='w-8 h-8'/>
            <CiMenuFries className='w-8 h-8'/>
        </div>
    </div>
  )
}

export default Navbar
