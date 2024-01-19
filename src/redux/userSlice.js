import { createSlice } from "@reduxjs/toolkit"
// import movieSlice from "./movieSlice";

const initialState = {
    userName: '',
    email: '',
    photo: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.displayName;
            state.email = action.payload.email;
            state.photo = action.payload.photoURL;
        },
        signOut: (state) => {
            state.userName = null;
            state.email = null;
            state.photo = null;
        },
    }
})

export const { setUser, signOut } = userSlice.actions

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;