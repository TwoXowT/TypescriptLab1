import { 
    ADD_TASK,
    DONE_TASK,
    REMOVE_TASK,
    ADD_DESCRIPTION_TASK,

} from "../actions/actions";

let nextTodoId = 14;

export const addDescription = (id,text)=>({
    type: ADD_DESCRIPTION_TASK,
        id,
        text,
});

export const addTask = (text) =>({
    type: ADD_TASK,
    id:nextTodoId++,
    text,
});

export const doneTask = (id) =>({
    type: DONE_TASK,
    id,
});

export const removeTask = (id)=>({
    type: REMOVE_TASK,
    id
})
