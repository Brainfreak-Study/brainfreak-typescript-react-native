//user slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
    name?: string;
    username?: string;
    email?: string;
    role?: string;
    expire_at?: string;
    token?: string;
    isAuth?: boolean;
}

const initialState: IUserState = {
    name: "",
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
            action.payload.name && (state.name = action.payload.name);
            action.payload.username &&
                (state.username = action.payload.username);
            action.payload.email && (state.email = action.payload.email);
            action.payload.role && (state.role = action.payload.role);
            action.payload.expire_at &&
                (state.expire_at = action.payload.expire_at);
            action.payload.token && (state.token = action.payload.token);
            action.payload.isAuth && (state.isAuth = action.payload.isAuth);
        },
        removeUser: (state) => {
            state.name = "";
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
