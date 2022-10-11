import React, {useEffect, useState} from 'react';
import {Task} from '../Task/Task';
import './TaskList.scss';
import {
    Box,
    IconButton,
    Modal,
    Typography, useTheme
} from "@mui/material";
import {ArrowDownward, ArrowUpward, CancelOutlined} from "@mui/icons-material";
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import { doneTask, removeTask,refactorTask} from "../../reducers/taskListReducer";
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import {TagArea} from "./additionalComponents/TagArea";
import {DescriptionArea} from "./additionalComponents/DescriptionArea";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface TaskListProps{
    flag:boolean;
    filter?: string;
}

export const TaskList: React.FC<TaskListProps> = ({flag,filter}) => {
    const [open, setOpen] = useState(false);
    const [isActiveNextTask, setIsActiveNextTask] = useState(false)
    const [isActivePrevTask, setIsActivePrevTask] = useState(false)
    const taskList = useAppSelector(state => state.taskListReducer.taskList.filter((task:Task) => task.done === flag))
    const [currentTask, setCurrentTask] = useState(taskList[1])
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(refactorTask({currentTask}))
    }

    const dispatch = useAppDispatch()


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



    function completeTask(id:number) {
        dispatch(doneTask(id))
    }

    function deleteTask(id:number) {
        dispatch(removeTask(id))
    }


    function getNextTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask)+1])
    }

    function getPrevTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask)-1])
    }

    function changeStatusTask(){
        let newTask = {...currentTask}
        newTask.done = !newTask.done
        setCurrentTask(newTask)
    }




    return (
        <>


            <Box className='tasklist-container'>
                {taskList
                    .filter((task:Task)=>{
                        if(filter){
                            if(task.tags.includes(filter)){
                                return task
                            }
                        }else{
                            return task
                        }
                    })
                    .filter((task:Task) => task.done === flag)
                    .map((task:Task) => <Task task={task}
                                                                                   key={task.id}
                                                                                   handleOpen={handleOpen}
                                                                                   setCurrentTask={setCurrentTask}
                                                                                   completeTask={completeTask}
                                                                                   deleteTask={deleteTask}

                />)}
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
            >

                <Box sx={style}>
                    <Box className={'modaltask-navbar-container'}>
                        <IconButton disabled={isActivePrevTask}><ArrowUpward onClick={getPrevTask}/></IconButton>
                        <IconButton disabled={isActiveNextTask}><ArrowDownward onClick={getNextTask}/></IconButton>
                        <IconButton> <CancelOutlined color='error' onClick={handleClose}/></IconButton>
                    </Box>

                    <Typography id="modal-modal-description" >
                        <IconButton className='task-button'
                                    onClick={changeStatusTask} >
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
                   />
                </Box>


            </Modal>
        </>


    )

}
