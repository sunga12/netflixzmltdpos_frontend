import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = 'http://localhost:3001/api/v1';
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk("products/getProducts", async (_, thunkAPI) => {
  try {
    const response = await axios(`${API_URL}/products`,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching Products")
  }
});


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default productsSlice.reducer;
