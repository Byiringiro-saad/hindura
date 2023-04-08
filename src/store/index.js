import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//reducers
import fileReducer from "./reducers/file";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const store = configureStore({
  reducer: {
    file: fileReducer,
  },
  devTools: true,
  middleware: customizedMiddleware,
});

export default store;
