import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./inithialState";


export const tagSlice = createSlice({
    name: 'tagSlice',
    initialState: initialState,
    reducers:{
        addTag:(state,action) =>{
            state.allTags = [action.payload,...state.allTags]},
        removeTag: (state, action)=>{state.allTags.filter(tag=> tag !==action.payload)},
    }
})

export const {addTag, removeTag} = tagSlice.actions
export default tagSlice.reducer