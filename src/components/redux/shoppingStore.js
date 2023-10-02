import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { shoppingreducer } from "../reducers/shoppingReducer.js";

const shoppingStore = configureStore({
  reducer: shoppingreducer,
  middleware: [thunk]
});

export default shoppingStore;