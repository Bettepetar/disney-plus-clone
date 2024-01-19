import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: '',
    email: '',
    photo: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //a reducer is a function that access the store and returns an update on the store
        //a dispatch takes an action containing a payload which instructs the reducer on what to update
        setUserLoginDetails: (state, action) => {
            // this reducer fn takes in the store and action and updates the store on the content of the action(payload object)
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;

            //updating the name, email, photo properties of the state obj
        },
        setSignoutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

export const { setSignoutState, setUserLoginDetails } = userSlice.actions
//eport of a ll the actions contained in the userSclice reducer

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
//exports provides access to all the state variable(content of the store)

export default userSlice.reducer

