import React, {useEffect} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Task.scss';
import {Box, Chip, IconButton} from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';


export const Task = ({task,handleOpen,setCurrentTask,completeTask,deleteTask})=>{

    function openModal(task){
        setCurrentTask(task)
        handleOpen()
    }




    const completeStatus = task.done ? 'text': '';

    return(
      <>
          <Box className='task'>
              <IconButton className='task-button'
                          disabled={task.done}
                          variant={completeStatus}
                          onClick={()=>completeTask(task.id)} >
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