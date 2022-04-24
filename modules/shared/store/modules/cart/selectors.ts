import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@shared/store/store";
import { CART } from "./constans";

export const cartState = (rootState: RootState) => rootState[CART];

export const productsSelector = createSelector(
  cartState,
  (state) => state.products
);

export const subTotalSelector = createSelector(
  cartState,
  (state) => state.subTotal
);
