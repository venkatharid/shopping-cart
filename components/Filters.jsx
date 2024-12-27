import { HIGH_TO_LOW, LOW_TO_HIGH } from '@/constants/constant';
import { CartState } from '@/context/Context';
import React from 'react';

const Filters = () => {
  const {
    productDispatch,
    productState: {sort},
  } = CartState();

  return (
    <div
      className="filters bg-[#343a40] text-white p-5 flex flex-col w-[20%] m-2 md:block"
    >
      <span className="text-lg font-semibold">Filter Products</span>
      <div>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            id="ascending"
            name="sorting"
            className="form-radio"
            onChange={() =>
              productDispatch({
                type: 'SORT_BY_PRICE',
                payload: LOW_TO_HIGH,
              })
            }
            checked={sort === LOW_TO_HIGH}
          />
          <span>Low to High Price</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center space-x-2">
          <input
            type="radio"
            id="descending"
            name="sorting"
            className="form-radio"
            onChange={() =>
              productDispatch({
                type: 'SORT_BY_PRICE',
                payload: HIGH_TO_LOW,
              })
            }
            checked={sort === HIGH_TO_LOW}
          />
          <span>High to Low Price</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
