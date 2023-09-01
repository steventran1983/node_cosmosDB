import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../../../data.js";
const initialState = {
  infos: {
    teamMembers: [],
    platforms: [],
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
        state.infos.teamMembers = action.payload;
      })
      .addCase(getInfo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const getInfo = createAsyncThunk("home/getInfo", async () => {
  try {
    const response = await axios.get(`${api}/employees/all`);
    return response.data;
  } catch (e) {
    return e.response;
  }
});

export default homeSlice;
