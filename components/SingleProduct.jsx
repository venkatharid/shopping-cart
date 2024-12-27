import { CartState } from '@/context/Context';
import React from 'react'
import Rating from './Rating';

const SingleProduct = ({ prod }) => {
  const { state: { cart }, dispatch } = CartState();

  return (
    <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex-[0_1_calc(100%)] sm:flex-[0_1_calc(50%-1.5rem)] lg:flex-[0_1_calc(33.33%-1.5rem)] justify-between">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex flex-col p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {prod.title}
        </h2>
        <div className="text-sm text-gray-600 mb-4">
          <span className="block text-xl font-bold text-gray-900">
           € {prod.price}
          </span>
          {prod.fastDelivery ? (
            <span className="text-green-600 font-medium">Fast Delivery</span>
          ) : (
            <span className="text-gray-600">4 days delivery</span>
          )}
        </div>
        <Rating rating={prod.rating} />
        <div className="mt-4">
          {cart.some((p) => p.id === prod.id) ? (
            <button
              className="w-full py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600 transition duration-300"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className={`w-full py-2 rounded-md font-medium transition duration-300 ${prod.stock
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.stock}
            >
              {!prod.stock ? "Out of Stock" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );

}

export default SingleProduct