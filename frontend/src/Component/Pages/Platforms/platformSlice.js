import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    platforms:[],
    status: "idle",
    error: null,
}

const plarformSlice = createSlice({
    name: "home",
    initialState: initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPlatforms.pending, (state) => {
            state.status = "loading";
        })
        .addCase(getPlatforms.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.platforms = action.payload;
        }).addCase(getPlatforms.rejected, (state) => {
            state.status = "failed";
        });
    }
});

export const getPlatforms = createAsyncThunk("platforms/getPlatforms", async () => {
    try {
        const response = await axios.get("https://my-json-server.typicode.com/steventran1983/mockjson/platforms");
        console.log(response.data)
        return response.data;
    } catch (e) {
        return e.response;
    }
});

export default plarformSlice;