import { configureStore } from "@reduxjs/toolkit";
import Adminslice from "../features/Adminslice";
import Userslice from "../features/Userslice";

export const store = configureStore({
  reducer: {
    user: Userslice,
    admin: Adminslice,
  },
});
