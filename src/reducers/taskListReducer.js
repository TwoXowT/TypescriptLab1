
import { initialState } from "./inithialState";

import { createSlice } from '@reduxjs/toolkit';

let idTask = 50
const taskListSlice = createSlice({
    name: 'taskListSliser',
    initialState: initialState,
    reducers:{
        addTask: (state,action)=>{

                state.taskList = [{id:idTask++,
                    text: action.payload.text,
                    done: false,
                    description: action.payload.description || '',
                    tags: action.payload.description || [],
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
                console.log(action.payload)
                if (task.id === action.payload.currentTask.id) {

                    task.text = action.payload.currentTask.text || task.text
                    task.tags = action.payload.currentTask.tags || task.tags
                    task.description = action.payload.currentTask.description || task.tags

                }
                return task;
            })
        },

        addTagToTask: (state, action)=>{
            state.taskList =  state.taskList.map((task) => {
                if (task.id === action.payload.id) {
                    task.tags = action.payload.tags
                    console.log('indexTASKREDUX:',state.taskList[0])

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

export const {addTask, removeTask, doneTask, addDescription,addTagToTask,refactorTask} = taskListSlice.actions;
export default taskListSlice.reducer;
