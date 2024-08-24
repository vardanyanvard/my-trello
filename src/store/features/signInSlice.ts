import { createSlice } from "@reduxjs/toolkit";
import { SignInStateTypes } from "../../types";

const initialState: SignInStateTypes = {};

const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {},
});

export default signInSlice.reducer;
