import React, {useState} from 'react';
import {addTask} from '../../reducers/taskListReducer';
import {Box, Container, Fab, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
// import './AddTask.scss'
import {useAppDispatch} from "../../hooks";

export const AddTask = () => {
    const [text, setText] = useState<string>('');
    const dispatch = useAppDispatch();

    function handleChange(e: any) {
        setText(e.target.value)
    }

    function handleKeyDown(e: any) {
        if (e.key === 'Enter' && text) {
            buttonCreateClick()
        }
    }

    function buttonCreateClick() {
        dispatch(addTask({text}))
        setText('')
    }

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            aligntItems: 'center'
        }}>
            <TextField
                label="add some task"
                variant="standard"
                size="medium"
                fullWidth
                onKeyDown={handleKeyDown}
                value={text}
                onChange={handleChange}/>

            <Fab size='medium' color="primary" aria-label="add" onClick={() => buttonCreateClick()} disabled={!text}>
                <AddIcon/>
            </Fab>

        </Container>
    )
}