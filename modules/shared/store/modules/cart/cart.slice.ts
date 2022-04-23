import { createSlice } from "@reduxjs/toolkit";
import { CART } from "./constans";

export const initialState: {
  products: Array<{
    id: string;
    title: string;
    price: number;
    quantity?: number;
  }>;
} = {
  products: [],
};

export const cartSlice = createSlice({
  name: CART,
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      if (state.products.length) {
        const products = state.products;
        const index = products.findIndex((product) => product.id === item.id);
        if (index !== -1) {
          console.log(index);
          // if product already available in the cart
          const product = products[index];
          const quantity = product.quantity ? product.quantity : 0;
          products[index] = { ...product, ...item, quantity: quantity + 1 }; // just increase the quantity
        } else {
          // if this product is not available in the cart
          state.products.push({ ...item, quantity: 1 });
        }
      } else {
        // if the cart is empty
        state.products.push({ ...item, quantity: 1 });
      }
    },
  },
});

/*
 * Export reducer for store configuration.
 */
export const cartReducer = cartSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 */
export const cartActions = cartSlice.actions;
