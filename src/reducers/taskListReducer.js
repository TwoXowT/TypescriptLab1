
import { initialState } from "./inithialState";

import { createSlice } from '@reduxjs/toolkit';



let idTask = 50


const taskListSlice = createSlice({
    name: 'taskListSliser',
    initialState: initialState,
    reducers:{
        addTask: (state,action)=>{
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


        addDescription: (state,action)=>{
            state.taskList = state.taskList.map((task) => {
                    if (task.id === action.payload.id) {
                        task.description = action.payload.description;
                    }
                    return task;
                })

        }

    }
})

export const {addTask, removeTask, doneTask, addDescription,refactorTask} = taskListSlice.actions;
export default taskListSlice.reducer;
