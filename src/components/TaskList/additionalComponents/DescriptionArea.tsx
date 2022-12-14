import React, {useEffect, useState} from "react";
import {Box, Button, TextField} from "@mui/material";


interface DescriptionAreaProps{
    currentTask: Task;
    setCurrentTask: (task:Task)=> void;
}


export const DescriptionArea: React.FC<DescriptionAreaProps> = ({currentTask, setCurrentTask})=>{

    const [isEdit,setIsEdit] = useState(false)
    const [description, setDescription] = useState(currentTask.description || '')

    useEffect(()=>{
        console.log('decs:',description)
    },[description])

    function handleChange(e:any) {

        setDescription(e.target.value)

    }


    function saveDescription(){
        let newTask = {...currentTask}
        newTask.description = description
        setCurrentTask(newTask)
        setIsEdit(false)
    }

    function handleKeyDown(e:any) {
        if (e.key === 'Enter' && description) {
            saveDescription()
        }
    }

    return(
        <>
            {isEdit?(
                <>
                    <TextField id="standard-basic"
                               value={description}
                               onChange={handleChange}
                               variant="outlined"
                               onKeyDown={handleKeyDown}
                               inputProps={{step: 300}}
                    />
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
