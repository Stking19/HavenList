import { createSlice } from "@reduxjs/toolkit";

const storedUserId = JSON.parse(localStorage.getItem("id"));
const storedToken = localStorage.getItem("token");

const initialState = {
    isAuthenticated: !!storedToken,
    user: storedUserId || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            // localStorage.removeItem("token");
            // localStorage.removeItem("user");
            // localStorage.removeItem("email");
            // localStorage.removeItem("id");
            localStorage.clear();
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;