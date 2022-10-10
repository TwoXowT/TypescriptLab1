
import { initialState } from "./inithialState";

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

let idTask = 50


const taskListSlice = createSlice({
    name: 'taskListSliser',
    initialState,
    reducers:{
        addTask: (state, action:PayloadAction<any>)=>{
            console.log('i am here', action)
                state.taskList = [
                    {id:idTask++,
                    text: action.payload.text,
                    done: false,
                    description: '',
                    tags:  [],
                }, ...state.taskList]
        },
        removeTask: (state,action)=>{
                state.taskList = state.taskList.filter((task)=>task.id !== action.payload)
        },
        doneTask: (state,action)=>{

            state.taskList =  state.taskList.map((task) => {
                    if (task.id === action.payload) {
                        task.done = !task.done;
                    }
                    return task;
                })
        },

        refactorTask:(state, action)=>{
            state.taskList =  state.taskList.map((task) => {
                if (task.id === action.payload.currentTask.id) {
                    task = action.payload.currentTask
                }
                return task;
            })
        },


    }
})

export const {addTask, removeTask, doneTask,refactorTask} = taskListSlice.actions;
export default taskListSlice.reducer;
