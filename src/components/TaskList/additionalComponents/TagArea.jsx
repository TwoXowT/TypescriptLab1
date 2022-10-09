import {refactorTask} from "../../../reducers/taskListReducer";
import {Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import React from "react";

export const TagArea = ({currentTask,setCurrentTask,allTags})=>{

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function handleChange(e){
        let newTask = {...currentTask};
        newTask.tags = e.target.value
        setCurrentTask(newTask)
    }

    return(
        <>
            <FormControl>
                <InputLabel id='tags-area-label'>Tags</InputLabel>
                <Select
                    labelId='tags-area-label'
                    id='tags-area'
                    multiple
                    value={currentTask.tags}
                    onChange={handleChange}
                    input={<OutlinedInput id='select-tags' label='select' />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}>

                    {allTags.map((tag,index)=>(
                        <MenuItem
                            key={index}
                            value={tag}
                        >
                            {tag}
                        </MenuItem>))}

                    >

                </Select>
            </FormControl>
        </>
    )
}
