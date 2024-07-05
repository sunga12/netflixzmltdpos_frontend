import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import ordersReducer from "./orders/ordersSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
    products: productsReducer,
  },
});

export default store;
