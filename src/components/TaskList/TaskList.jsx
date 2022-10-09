import React, {useEffect, useState} from 'react';
import {Task} from '../Task/Task';
import './TaskList.scss';

import {useDispatch, useSelector} from "react-redux";
import {
    Box,
    Button, Chip,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Modal, OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {ArrowDownward, ArrowUpward, CancelOutlined} from "@mui/icons-material";
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import {addDescription, doneTask, removeTask,addTagToTask,refactorTask} from "../../reducers/taskListReducer";
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import {TagArea} from "./additionalComponents/TagArea";
import {DescriptionArea} from "./additionalComponents/DescriptionArea";


export const TaskList = ({flag}) => {
    const [open, setOpen] = React.useState(false);
    const [isActiveNextTask, setIsActiveNextTask] = useState(false)
    const [isActivePrevTask, setIsActivePrevTask] = useState(false)
    const taskList = useSelector(state => state.taskListReducer.taskList.filter((task) => task.done === flag))
    const allTags = useSelector(state => state.tagSlice.allTags)
    const [currentTask, setCurrentTask] = useState(taskList[1])


    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        console.log('dfsafdsa')
        setOpen(false);
        dispatch(refactorTask({currentTask}))
    }




    // Контроль стрелок перехода к таскам в модальном окне
    useEffect(()=>{
        if(taskList.indexOf(currentTask) === 0){
            setIsActivePrevTask(true)
        }else{
            setIsActivePrevTask(false)
        }
        if(taskList.indexOf(currentTask) === taskList.length-1){
            setIsActiveNextTask(true)
        }else{
            setIsActiveNextTask(false)
        }


    },[currentTask])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: '70%',
        bgcolor: 'background.paper',
        borderRadius:'20px',
        p: 3,
    };

    const dispatch = useDispatch()

    function completeTask(id) {
        dispatch(doneTask(id))
    }

    function deleteTask(id) {
        dispatch(removeTask(id))
    }


    function getNextTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask)+1])
    }

    function getPrevTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask)-1])
    }






    return (
        <>


            <Box className='tasklist-container'>
                {taskList.filter((task) => task.done === flag).map((task) => <Task task={task}
                                                                                   key={task.id}
                                                                                   handleOpen={handleOpen}
                                                                                   setCurrentTask={setCurrentTask}
                                                                                   completeTask={completeTask}
                                                                                   deleteTask={deleteTask}

                />)}
            </Box>

            <Modal
                open={open}
                task={currentTask}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Box className={'modaltask-navbar-container'}>
                        <IconButton disabled={isActivePrevTask}><ArrowUpward onClick={getPrevTask}/></IconButton>
                        <IconButton disabled={isActiveNextTask}><ArrowDownward onClick={getNextTask}/></IconButton>
                        <IconButton> <CancelOutlined color='error' onClick={handleClose}/></IconButton>
                    </Box>

                    <Typography id="modal-modal-description" >
                        <IconButton className='task-button'
                                    onClick={()=>completeTask(currentTask.id)} >
                            {currentTask.done?(<CheckBoxRoundedIcon/>):(<CheckBoxOutlineBlankRoundedIcon/>)}
                        </IconButton>
                        {currentTask.text}
                    </Typography>

                    <DescriptionArea
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}/>
                    <TagArea
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                    allTags={allTags}/>
                </Box>


            </Modal>
        </>


    )

}
