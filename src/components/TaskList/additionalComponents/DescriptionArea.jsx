import React, {useState} from "react";
import {addDescription} from "../../../reducers/taskListReducer";
import {Box, Button, TextField} from "@mui/material";

export const DescriptionArea = ({currentTask, setCurrentTask})=>{

    const [isEdit,setIsEdit] = useState(false)
    const [description, setDescription] = useState(currentTask.description || '')


    function handleChange(e) {

        setDescription(e.target.value)

    }


    function saveDescription(){
        let newTask = {...currentTask}
        newTask.description = description
        setCurrentTask(newTask)
        setIsEdit(false)
    }

    return(
        <>
            {isEdit?(
                <>
                    <TextField id="standard-basic"
                               value={currentTask.description||''}
                               onChange={handleChange}
                               variant="outlined" />
                    <Button color = 'error'
                            variant='contained'
                            onClick={saveDescription}>SAVE</Button>
                </>

            ):(
                <Box onClick={()=>setIsEdit(true)}>{currentTask.description || 'Add description'}</Box>
            )}



        </>
    )
}
