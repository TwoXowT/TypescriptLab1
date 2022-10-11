import React, {useState} from "react";
import {TaskList} from "../TaskList/TaskList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Chip, Stack, TextField,} from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';
import AddIcon from '@mui/icons-material/Add';
import { addTag} from "../../reducers/tagsReducer";
export const FilterTaskList: React.FC = () => {

    const tags = useAppSelector(state => state.tagSlice.allTags)
    const [currentTag, setCurrentTag] = useState<string>(tags[0])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [tag, setAddtag] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleClick = (chip:any) => () =>{
        setCurrentTag(chip)
    }


    function handleChange(e:any) {
        setAddtag(e.target.value)
    }

    function handleKeyDown(e:any){
        if (e.key === 'Enter' && tag) {
            setAddtag(e.target.value)
            setIsOpen(false)
            dispatch(addTag(tag))
        }
    }

    return (
        <>
            <h3>Tags</h3>

            <Stack direction='row' spacing={1}>
                {tags.map((tag,index) =>
                    <Chip
                        key={index}
                        icon={<LabelIcon color='error'/>}
                        variant={currentTag === tag?'filled':'outlined'}
                        label={tag}
                        onClick={handleClick(tag)}
                    />

                )}
                {isOpen?( <TextField className='addtask-textfield'
                                     label="add some task"
                                     variant="standard"
                                     fullWidth
                                     size="medium"
                                     onKeyDown={handleKeyDown}
                                     value={tag}
                                     onChange={handleChange}/>):(<Chip label='add tag'
                                                                       icon={<AddIcon/>}
                                                                       clickable={true}
                                                                       onClick={()=>setIsOpen(true)} />)}

            </Stack>
            <h1> Current task</h1>
            <TaskList flag={false} filter={currentTag}/>
            <h1> Done task</h1>
            <TaskList flag={true} filter={currentTag}/>
        </>
    )
}