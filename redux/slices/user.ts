import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  _id?: string;
  username?: string;
  email?: string;
  role?: string;
  expire_at?: string;
  token?: string;
  isAuth?: boolean;
}

const initialState: IUserState = {
  _id: "",
  username: "",
  email: "",
  role: "",
  expire_at: "",
  token: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      action.payload._id && (state._id = action.payload._id);
      action.payload.username && (state.username = action.payload.username);
      action.payload.email && (state.email = action.payload.email);
      action.payload.role && (state.role = action.payload.role);
      action.payload.expire_at && (state.expire_at = action.payload.expire_at);
      action.payload.token && (state.token = action.payload.token);
      action.payload.isAuth && (state.isAuth = action.payload.isAuth);
    },
    removeUser: (state) => {
      state._id = "";
      state.username = "";
      state.email = "";
      state.role = "";
      state.expire_at = "";
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
