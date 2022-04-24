import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalPrice } from "@shared/helpers";
import { Product } from "interface";
import { CART } from "./constans";

export const initialState: {
  products: Array<Product> | [];
  subTotal: number;
} = {
  products: [],
  subTotal: 0,
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
    update: (state, action: { payload: { quantity: number; id: string } }) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (action.payload.quantity < 1 && index > -1) {
        // delete if quantity, 0
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      } else {
        // update quanity
        const product = state.products[index];
        state.products[index] = {
          ...product,
          quantity: action.payload.quantity,
        };
      }
    },
    udpateSubTotal: (state) => {
      state.subTotal = calculateTotalPrice(state.products);
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
