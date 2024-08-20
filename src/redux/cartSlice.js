import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingGameIndex = state.cart.findIndex(item => item.dealID === action.payload.dealID);
      if (existingGameIndex !== -1) {
        state.cart[existingGameIndex].quantity += 1;
      } else {
        state.cart.push({
          dealID: action.payload.dealID,
          name: action.payload.title,
          price: action.payload.salePrice,
          imageUrl: action.payload.thumb,
          quantity: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
        const existingGameIndex = state.cart.findIndex(item => item.dealID === action.payload.dealID);
      
        if (existingGameIndex !== -1) {
          const existingGame = state.cart[existingGameIndex];
          
          if (existingGame.quantity > 1) {
            existingGame.quantity -= 1;
          } else {
            state.cart = state.cart.filter(item => item.dealID !== action.payload.dealID);
          }
        }
      
        localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
