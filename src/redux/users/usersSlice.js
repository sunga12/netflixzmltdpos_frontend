import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const API_URL = 'http://localhost:3001/api/v1';
const initialState = {
  users: [],
  isLoading: false,
  error: null,
  user: {},
}

export const getUsers = createAsyncThunk("users/getUsers", async (username, role, fullname, thunkAPI) => {
  try {
    const response = await axios(`${API_URL}/users`,
      {
        username,
        role,
        fullname,
      }
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching Users")
  }
})

export const getUserbyId = createAsyncThunk("users/getUser", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching User");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserbyId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.user = action.payload;
    });
    builder.addCase(getUserbyId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getUserbyId.pending, (state) => {
      state.isLoading = true;
    });
  },
})

export default usersSlice.reducer;
