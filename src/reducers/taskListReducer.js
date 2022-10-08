
import { initialState } from "./inithialState";

import { createSlice } from '@reduxjs/toolkit';

let idTask = 50
const taskListSlice = createSlice({
    name: 'taskListSliser',
    initialState: initialState,
    reducers:{
        addTask: (state,action)=>{

                state.taskList = [{id:idTask++,
                    text: action.payload,
                    done: false,
                    description:'',
                    tags: [],
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

        addTagToTask: (state, action)=>{
            state.taskList =  state.taskList.map((task) => {
                if (task.id === action.payload.id) {
                    console.log('fds')
                    task.tags = action.payload.tags
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

export const {addTask, removeTask, doneTask, addDescription,addTagToTask} = taskListSlice.actions;
export default taskListSlice.reducer;
