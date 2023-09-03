import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../Component/Pages/Home/homeSlice";
import productSlice from "../Component/Pages/Products/productSlice";
import platformSlice from "../Component/Pages/Platforms/platformSlice";
import testimonialSlice from "../Component/Pages/Home/testimonialSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    products: productSlice.reducer,
    platforms: platformSlice.reducer,
    testimonials: testimonialSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
