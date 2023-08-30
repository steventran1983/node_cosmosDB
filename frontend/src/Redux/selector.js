import { createSelector } from "@reduxjs/toolkit";

export const homeSelector = (state) => state.home;
export const productSelector = (state) => state.products;
export const platformSelector = (state) => state.platforms;