import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import React, {useState} from "react";
import {Task} from "../../Task/Task";
import {initialState} from "../../../reducers/inithialState";
import {useAppSelector} from "../../../hooks";


interface TagAreaProps{
    currentTask: Task;
    setCurrentTask: (task: Task)=> void;
}


export const TagArea: React.FC<TagAreaProps> = ({currentTask,setCurrentTask})=>{
    const allTags = useAppSelector(state => state.tagSlice.allTags)
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

    function handleChange(e:any){
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
                    input={<OutlinedInput  id='select-tags' label='select' />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}>

                    {allTags.map( (tag:string, index:any)=>(
                        <MenuItem
                            key={index}
                            value={tag}
                        >
                            {tag}
                        </MenuItem>))}

                </Select>
            </FormControl>
        </>
    )
}


// <Stack>
//     <Autocomplete
//         multiple
//         freeSolo
//         options={tags.map(tag=>tag)}
//         renderTags={(value, getTagProps) =>
//             value.map((option, index) => (
//                 <Chip variant="outlined" label={option} {...getTagProps({ index })} />
//             ))
//         }
//         renderInput={(params) => (
//             <TextField
//                 {...params}
//                 variant="outlined"
//                 label="freeSolo"
//                 placeholder="Favorites"
//             />
//         )}
//
//     />
// </Stack>