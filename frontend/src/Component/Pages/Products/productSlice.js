import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    status: "idle",
    error: null,
}

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
        }).addCase(getProducts.rejected, (state) => {
            state.status = "failed";
        });
    }
});

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await axios.get("https://my-json-server.typicode.com/steventran1983/mockjson/products");
        return response.data;
    } catch (e) {
        return e.response;
    }
});

export default productSlice;