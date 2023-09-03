import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../data.js";
import axios from "axios";

const initialState = {
  testimonials: [],
  status: "idle",
  error: null,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTesttimonials.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTesttimonials.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getTesttimonials.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getTesttimonials = createAsyncThunk(
  "testimonials/getTestimonials",
  async () => {
    try {
      const response = await axios.get(`${api}/testimonials/all`);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
);

export default testimonialSlice;
