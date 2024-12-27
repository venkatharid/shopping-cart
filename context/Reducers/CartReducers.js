export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return { ...state, products: [...action.payload] }
    case 'ADD_TO_CART':
      const updatedCartAdd = [...state.cart, { ...action.payload, qty: 1 }]
      localStorage.setItem('cart', JSON.stringify(updatedCartAdd))
      return { ...state, cart: updatedCartAdd }
    case 'REMOVE_FROM_CART':
      const updatedCartRemove = state.cart.filter(
        (c) => c.id !== action.payload.id
      )
      localStorage.setItem('cart', JSON.stringify(updatedCartRemove))
      return { ...state, cart: updatedCartRemove }
    case 'CHANGE_CART_QTY':
      const updatedCartQty = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
      )
      localStorage.setItem('cart', JSON.stringify(updatedCartQty))
      return { ...state, cart: updatedCartQty }
    default:
      return state
  }
}
