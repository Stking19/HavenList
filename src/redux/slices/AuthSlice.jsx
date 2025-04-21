import { createSlice } from "@reduxjs/toolkit";

// Check for stored values
const storedUserId = JSON.parse(localStorage.getItem("id"));
const storedToken = localStorage.getItem("token");
const storedProfileId = localStorage.getItem("profileId");

const initialState = {
    isAuthenticated: !!storedToken,
    user: storedUserId || null,
    profileId: storedProfileId || null,
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
            state.profileId = null;
            localStorage.removeItem("token");
            localStorage.removeItem("listingId");
            localStorage.removeItem("landlordId")
            localStorage.removeItem("email")
            localStorage.removeItem("id")
            localStorage.removeItem("user")
            localStorage.removeItem("resetToken")
            localStorage.removeItem("user")
        },
        setProfileId: (state, action) => {
            state.profileId = action.payload;
            localStorage.setItem("profileId", action.payload);
        },
    },
});

export const { login, logout, setProfileId } = authSlice.actions;

export default authSlice.reducer;