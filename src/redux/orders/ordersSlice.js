import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = 'http://localhost:3001/api/v1';
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

export const getOrders = createAsyncThunk("orders/getOrders", async (user_id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users/${user_id}/orders`,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching Orders")
  }
})


const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });
  },
})

export default ordersSlice.reducer;
