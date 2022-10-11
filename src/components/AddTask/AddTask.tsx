import React, { useState } from 'react';
import { addTask } from '../../reducers/taskListReducer';
import {Box, Fab, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
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

    return(
        <Box className='addtask-container'>
            <TextField className='addtask-textfield'
                       label="add some task"
                       variant="standard"
                       fullWidth
                       size="medium"
                       onKeyDown={handleKeyDown}
                       value={text}
                       onChange={handleChange}/>
            <Box className='addtask-button-container'>

                <Fab size='medium' color="error" aria-label="add" onClick={()=>buttonCreateClick()} disabled={!text}>
                    <AddIcon />
                </Fab>

            </Box>

        </Box>
    )
}