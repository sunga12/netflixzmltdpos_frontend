import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const API_URL = 'http://localhost:3001/api/v1';
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
  order_items: [],
  order: [],
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

export const getOrderItems = createAsyncThunk("orders/getOrderItems", async (user_id, order_id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users/${1}/orders/${1}/order_items`,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching Order Items");
  }
});

export const getOrderById = createAsyncThunk("orders/getOrderById", async (user_id, id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users/${1}/orders/${1}`,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching Order");
  }
});

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
    builder.addCase(getOrderItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.order_items = action.payload;
    });
    builder.addCase(getOrderItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrderItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.order = action.payload;
    });
    builder.addCase(getOrderById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getOrderById.pending, (state) => {
      state.isLoading = true;
    });
  },
})

export default ordersSlice.reducer;
