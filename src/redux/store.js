import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import ordersReducer from "./orders/ordersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
  },
});

export default store;
