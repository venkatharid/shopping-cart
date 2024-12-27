'use client'
import { CartState } from '@/context/Context'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
  const {state, dispatch, productDispatch} = CartState();

  return (
    <header className='bg-gray-600 text-white shadow-lg'>
      <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
        <Link className='text-xl font-bold' href='/'>
          Shopping Cart
        </Link>
        <div className='flex items-center w-1/2 max-w-[500px]'>
          <input
            type='text'
            placeholder='Search...'
            className='w-full px-4 py-2 rounded-md text-gray-700 focus:outline-none'
            onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
            }}
          />
        </div>
        <div className='relative flex items-center'>
          <button
            onClick={toggleCartDropdown}
            className='flex items-center space-x-2 hover:text-gray-300'
          >
            <FaShoppingCart size={24} />
            <span className='text-sm bg-red-500 text-white rounded-full px-2 py-0.5 ml-2'>
              {state.cart.length}
            </span>
          </button>
          {isCartOpen && (
            <div className='absolute right-0 top-full mt-2 w-64 bg-white text-gray-700 rounded-lg shadow-lg p-4 z-50'>
              {state.cart.length > 0 ? (
                <>
                {state.cart.map((item) => (
                  <div
                    key={item.id}
                    className='flex items-center justify-between p-2 hover:bg-gray-100 rounded'
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className='w-10 h-10 rounded object-cover'
                    />
                    <p className='text-sm font-medium flex-1 mx-2'>
                      {item.title}
                    </p>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: item,
                        })
                      }
                      className='text-red-500 hover:bg-red-100 p-1 rounded'
                    >
                      <AiFillDelete fontSize="24px" />
                    </button>
                  </div>
                  ))}
                  <Link href="/cart">
                  <button className={`w-full p-3 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 `}>
                    Go To Cart
                  </button>
                </Link>
                </> 
              ) : (
                <p>Cart is empty</p>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
