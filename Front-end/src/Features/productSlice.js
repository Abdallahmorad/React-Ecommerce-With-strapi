import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/products?populate=*`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async (category, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/products?populate=*&filters[category][$eq]=${category}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetch products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
      });

    //get categories
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
