import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../data.js";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${api}/products/all`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
);

export default productSlice;
