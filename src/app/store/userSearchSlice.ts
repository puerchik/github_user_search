import { State } from "@/shared/types/response";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: State[] = [
  {
    name: "",
    created_at: "",
    avatar_url: "",
    bio: null,
    public_repos: 0,
    followers: 0,
    following: 0,
    location: null,
    twitter_username: null,
    blog: "",
    company: null,
    html_url: "",
  },
];

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    getUser(state: State[], action: PayloadAction<State>) {
      state[0] = action.payload;
    },
  },
});

export const appReducer = userSearchSlice.reducer;
export const appActions = userSearchSlice.actions;
