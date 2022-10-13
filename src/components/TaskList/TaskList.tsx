import React, {useEffect, useState} from 'react';
import {Task} from '../Task/Task';
// import './TaskList.scss';
import {
    Box, Container,
    IconButton,
    Modal, Stack,
    Typography, useTheme
} from "@mui/material";
import {ArrowDownward, ArrowUpward, CancelOutlined} from "@mui/icons-material";
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import {doneTask, removeTask, refactorTask} from "../../reducers/taskListReducer";
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import {TagArea} from "./additionalComponents/TagArea";
import {DescriptionArea} from "./additionalComponents/DescriptionArea";
import {useAppDispatch, useAppSelector} from "../../hooks";

interface TaskListProps {
    flag: boolean;
    filter?: string;
}

export const TaskList: React.FC<TaskListProps> = ({flag, filter}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [isActiveNextTask, setIsActiveNextTask] = useState<boolean>(false)
    const [isActivePrevTask, setIsActivePrevTask] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const taskList = useAppSelector(state => state.taskListReducer.taskList.filter((task: Task) => task.done === flag))


    const [currentTask, setCurrentTask] = useState<Task>(taskList[1] || {})
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(refactorTask({currentTask}))
    }

    // Контроль стрелок перехода к таскам в модальном окне
    useEffect(() => {
        let index = -1;
        for(let i = 0; i < taskList.length; i++){
            if(currentTask.id === taskList[i].id){
                index = i;
                break
            }
        }

        if (index === 0) {
            setIsActivePrevTask(true)
        } else {
            setIsActivePrevTask(false)
        }
        if (index === taskList.length - 1) {
            setIsActiveNextTask(true)
        } else {
            setIsActiveNextTask(false)
        }


    }, [currentTask])

    const style = {};


    function completeTask(id: number) {
        dispatch(doneTask(id))
    }

    function deleteTask(id: number) {
        dispatch(removeTask(id))
    }


    function getNextTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask) + 1])
    }

    function getPrevTask() {
        setCurrentTask(taskList[taskList.indexOf(currentTask) - 1])
    }

    function changeStatusTask() {
        let newTask = {...currentTask}
        newTask.done = !newTask.done
        setCurrentTask(newTask)
    }


    return (
        <>


            <Stack spacing={1}>
                {taskList
                    .filter((task: Task) => {
                        if (filter) {
                            if (task.tags.includes(filter)) {
                                return task
                            }
                        } else {
                            return task
                        }
                    })
                    .filter((task: Task) => task.done === flag)
                    .map((task: Task) => <Task task={task}
                                               key={task.id}
                                               handleOpen={handleOpen}
                                               setCurrentTask={setCurrentTask}
                                               completeTask={completeTask}
                                               deleteTask={deleteTask}

                    />)}
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
            >

                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '80vh',
                    bgcolor: 'background.paper',
                    borderRadius: '20px',
                    p: 3,
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <IconButton disabled={isActivePrevTask}><ArrowUpward onClick={getPrevTask}/></IconButton>
                        <IconButton disabled={isActiveNextTask}><ArrowDownward onClick={getNextTask}/></IconButton>
                        <IconButton> <CancelOutlined color='error' onClick={handleClose}/></IconButton>
                    </Box>

                    <Typography id="modal-modal-description">
                        {/*<IconButton className='task-button'*/}
                        {/*            onClick={changeStatusTask}>*/}
                        {/*    {currentTask.done ? (<CheckBoxRoundedIcon/>) : (<CheckBoxOutlineBlankRoundedIcon/>)}*/}
                        {/*</IconButton>*/}
                        {currentTask.text}
                    </Typography>
                    <Container>

                        <DescriptionArea
                            currentTask={currentTask}
                            setCurrentTask={setCurrentTask}/>
                    </Container>

                    <TagArea
                        currentTask={currentTask}
                        setCurrentTask={setCurrentTask}
                    />
                </Box>


            </Modal>
        </>


    )

}
