import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
  users: [],
  isLoading: false,
  error: null,
}

export const getUser = createAsyncThunk("users/getUser", async (userId, username, role, fullname, thunkAPI) => {
  try {
    const response = await axios(`${API_URL}/users/${userId}`,
      {
        username,
        role,
        fullname,
      }
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error fetching User")
  }
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
      state.users = action.payload.data;
    });
  },
})

export default usersSlice.reducer;
