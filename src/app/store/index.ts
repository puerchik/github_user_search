import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./userSearchSlice";
import { screenStatusReducer } from "./screenStatusSlice";

export const store = configureStore({
  reducer: { users: appReducer, screenStatus: screenStatusReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
