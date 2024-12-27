'use client';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer } from './Reducers/CartReducers';
import { fetchProducts } from '@/actions/products';
import { productReducer } from './Reducers/ProductReducer';

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
        searchQuery: "",
  });

  const checkLocalStorageforCartItems = () => {
    const cartItems = localStorage.getItem('cart');
    if (cartItems) {
      const parsedItems = JSON.parse(cartItems);
      if (Array.isArray(parsedItems) && parsedItems.length > 0) {
        parsedItems.forEach((item) => {
          dispatch({ type: 'ADD_TO_CART', payload: item });
        });
      }
    }
  }


  const loadProducts = async () => {
    try {
      const products = await fetchProducts();
      dispatch({ type: 'FETCH_PRODUCT', payload: products });
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  };

  useEffect(()=>{
    loadProducts();
    checkLocalStorageforCartItems()
  },[])

  return (
    <Cart.Provider value={{ state, dispatch,productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  const context = useContext(Cart);
  if (!context) {
    throw new Error('CartState must be used within a Cart.Provider');
  }
  return context;
};
