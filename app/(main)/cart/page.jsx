'use client'
import { CartState } from '@/context/Context';
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';

const page = () => {

  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-around p-2">
      <div className="w-full md:w-[70%]">
        <ul className="space-y-4">
          {cart.map((prod) => (
            <li key={prod.id} className="bg-white p-2 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center">
                <div className="col-span-1">
                  <img
                    src={prod.thumbnail}
                    alt={prod.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                  />
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <span className="text-lg">{prod.title}</span>
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <span className="text-lg">₹ {prod.price}</span>
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <select
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                    className="border border-gray-300 p-2 rounded-md w-full"
                  >
                    {[...Array(prod.stock).keys()].map((item) => (
                      <option key={item + 1}>{item + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-1 sm:col-span-1 text-center">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <AiFillDelete fontSize="20px" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="filters summary p-4 mt-6 h-fit bg-white shadow-md rounded-lg w-full md:w-auto">
        <span className="text-xl font-semibold">
          Subtotal ({cart.length}) items
        </span>
        <div className="mt-2 text-2xl font-bold">Total: € {total}</div>
        <button
          type="button"
          disabled={cart.length === 0}
          className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );


}

export default page