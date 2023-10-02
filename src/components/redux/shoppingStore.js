import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { shoppingreducer } from "./shoppingreducer.js";

const shoppingStore = configureStore({
  reducer: shoppingreducer,
  middleware: [thunk]
});

export default shoppingStore;