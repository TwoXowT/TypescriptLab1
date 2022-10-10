import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Task.scss';
import {Box, Chip, IconButton} from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';


interface TaskProps{
    task: Task;
    handleOpen: ()=> void;
    completeTask: (id:number)=> void;
    deleteTask: (id:number)=>void;
    setCurrentTask: (task: Task)=>void;
}



export const Task: React.FC<TaskProps> = ({
    task,handleOpen,completeTask,deleteTask,setCurrentTask
                                          })=>{

    function openModal(task: Task){
        setCurrentTask(task)
        handleOpen()
    }

    return(
      <>
          <Box className='task'>
              <IconButton className='task-button'
                          disabled={task.done}
                          // variant={task.done ? 'text': ''}
                          onClick={()=>completeTask(task.id)}
              >
                  <CheckIcon/>
              </IconButton>
              <Box className={task.done?"done task-item":"task-item"}>{task.text}</Box>
              <div className='task-button-group'>




                  <IconButton className='task-button'
                              onClick={()=>{openModal(task)}}>
                      <BorderColorIcon color="error"/>
                  </IconButton>



                  <IconButton className='task-button'
                              onClick={()=>deleteTask(task.id)}
                  >
                      <DeleteIcon color="error"/>
                  </IconButton>

              </div>

          </Box>
          <div className='tags-container'>
              {task.tags.map((tag,index)=><Chip size='small'  variant="outlined" key={index} icon={<LabelIcon/>} label={tag}/>)}
          </div>


      </>


    )
}