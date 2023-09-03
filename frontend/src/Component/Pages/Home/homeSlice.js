import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../../../data.js";
const initialState = {
  infos: {
    teamMembers: [],
    testimonials: [],
    products: [],
  },
  status: "idle",
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.infos.teamMembers = action.payload.teamMembers;
        state.infos.products = action.payload.products;
        state.infos.testimonials = action.payload.testimonials;
      })
      .addCase(getInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getInfo = createAsyncThunk("home/getInfo", async () => {
  try {
    const responseTeamMebers = await axios.get(`${api}/employees/all`);
    const responseProducts = await axios.get(`${api}/products/all`);
    const responsetestimonials = await axios.get(`${api}/testimonials/all`);
    const response = {
      teamMembers: responseTeamMebers.data,
      products: responseProducts.data,
      testimonials: responsetestimonials.data,
    };
    console.log(response);
    return response;
  } catch (e) {
    return e.response;
  }
});

export default homeSlice;
