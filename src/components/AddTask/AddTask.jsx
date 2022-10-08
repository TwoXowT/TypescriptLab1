import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../reducers/taskListReducer';
import {Box, Button, TextField} from "@mui/material";
import './AddTask.scss'
export const AddTask = ()=>{
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    
    function handleChange(e) {
            setText(e.target.value)
    }
    
    function handleKeyDown(e){
        if (e.key === 'Enter' && text) {
            dispatch(addTask(text))
            setText('')
        }
    }
    
    function buttonCreateClick(){
        dispatch(addTask(text))
        setText('')
    }

    return(
        <Box className='addtask-container'>
            <TextField className='addtask-textfield' id="standard-basic" label="add some task" variant="standard"  onKeyDown={handleKeyDown} value={text} onChange={handleChange}/>
            <Box className='addtask-button-container'>
                <Button
                    variant="contained"
                    onClick={()=>buttonCreateClick()}
                    color='error'
                    disabled={!text}
                >
                    Add task
                </Button>
            </Box>

        </Box>
    )
}