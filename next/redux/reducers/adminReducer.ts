import {createSlice} from "@reduxjs/toolkit"
import {HYDRATE} from "next-redux-wrapper"

const initialState = {}
export const adminSlice = createSlice({
    name : 'admin',
    initialState, // [abc, setAbc]
    reducers : {}
})

export default adminSlice.reducer