import React, { useState } from 'react';
import { addTask } from '../../reducers/taskListReducer';
import {Box, Button, TextField} from "@mui/material";
import './AddTask.scss'
import {useAppDispatch} from "../../hooks";
export const AddTask = ()=>{
    const [text, setText] = useState<string>('');
    const dispatch = useAppDispatch();
    
    function handleChange(e:any) {
            setText(e.target.value)
    }
    
    function handleKeyDown(e:any){
        if (e.key === 'Enter' && text) {
            buttonCreateClick()
        }
    }
    
    function buttonCreateClick(){
        dispatch(addTask({text}))
        setText('')
    }

    function buttonCancelClick(){
        setText('')
    }


    return(
        <Box className='addtask-container'>
            <TextField className='addtask-textfield' id="standard-basic" label="add some task" variant="standard"  onKeyDown={handleKeyDown} value={text} onChange={handleChange}/>
            <Box className='addtask-button-container'>
                <Button
                    variant="contained"
                    onClick={()=>buttonCancelClick()}
                    color='error'
                    disabled={!text}
                >

                    Cancel
                </Button>


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