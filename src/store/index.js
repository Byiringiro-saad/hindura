import { configureStore } from "@reduxjs/toolkit";

//reducers
import fileReducer from "./reducers/file";

const store = configureStore({
  reducer: {
    file: fileReducer,
  },
  devTools: true,
});

export default store;
