import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ScreenStatus = {
  homeScreen: true,
  error: false,
  theme: "dark",
};

const screenStatusSlice = createSlice({
  name: "screenStatus",
  initialState,
  reducers: {
    setScreen(state, action: PayloadAction<Pick<ScreenStatus, "homeScreen">>) {
      state["homeScreen"] = action.payload.homeScreen;
    },
    setError(state, action: PayloadAction<Pick<ScreenStatus, "error">>) {
      state["error"] = action.payload.error;
    },
    setTheme(state, action: PayloadAction<Pick<ScreenStatus, "theme">>) {
      state["theme"] = action.payload.theme;
    },
  },
});

type ScreenStatus = {
  homeScreen: boolean;
  error: boolean | string | number | undefined | unknown;
  theme: "light" | "dark";
};

export const screenStatusReducer = screenStatusSlice.reducer;
export const screenStatusActions = screenStatusSlice.actions;
