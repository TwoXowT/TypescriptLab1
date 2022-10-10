import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./inithialState";


export const tagSlice = createSlice({
    name: 'tagSlice',
    initialState: initialState,
    reducers:{
        addTag:(state,action) =>{state.tags = [action.payload,...state.tags]},
        removeTag: (state, action)=>{state.tags.filter(tag=> tag !==action.payload)},
    }
})

export const {addTag, removeTag} = tagSlice.actions
export default tagSlice.reducer