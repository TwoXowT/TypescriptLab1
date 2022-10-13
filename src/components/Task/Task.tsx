import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Task.scss';
import {Box, Chip, Container, Divider, IconButton, Stack, Typography, useTheme} from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';


interface TaskProps {
    task: Task;
    handleOpen: () => void;
    completeTask: (id: number) => void;
    deleteTask: (id: number) => void;
    setCurrentTask: (task: Task) => void;
}


export const Task: React.FC<TaskProps> = ({
                                              task, handleOpen, completeTask, deleteTask, setCurrentTask
                                          }) => {

    const theme = useTheme();

    const handleClick = (chip: any) => () => {

    }

    function openModal(task: Task) {
        setCurrentTask(task)
        handleOpen()
    }

    return (
        <>
            <Container className='Container'>
                <Box className='Box-task'>
                    <Box sx={{
                        display: 'flex',
                        flexDireciton: 'row',
                        alignItems: 'center'

                    }}>
                        <IconButton className='IconButton-ChekIcon'
                                    disabled={task.done}
                                    onClick={() => completeTask(task.id)}
                        >
                            <CheckIcon />
                        </IconButton>
                        <Typography className={task.done ? "Typography-success" : "Typography"}>{task.text}</Typography>
                    </Box>

                    <Box>

                        <IconButton
                            onClick={() => {
                                openModal(task)
                            }}>
                            <BorderColorIcon/>
                        </IconButton>

                        <IconButton
                            color='primary'
                            onClick={() => deleteTask(task.id)}
                        >
                            <DeleteIcon/>
                        </IconButton>

                    </Box>

                </Box>

            </Container>
            <Container

            >
                <Box
                    sx={{
                        paddingBottom: '10px',
                        display: 'flex',
                        flexFlow: 'row wrap'

                    }}
                >
                    {task.tags.map((tag, index) => <Chip
                        size='small'
                        variant="outlined"
                        color='primary'
                        key={index} icon={<LabelIcon />}
                        label={tag}
                        onClick={handleClick(tag)}
                        sx={{
                            margin: '2px'
                        }}
                    />)}
                </Box>
                <Divider orientation="horizontal" flexItem/>
            </Container>


        </>


    )
}