import React, {useState} from "react";
import {TaskList} from "../TaskList/TaskList";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Alert, Box, Button, Chip, IconButton, Input, Snackbar, Stack, TextField, useTheme,} from "@mui/material";
import LabelIcon from '@mui/icons-material/Label';
import AddIcon from '@mui/icons-material/Add';
import {addTag} from "../../reducers/tagsReducer";

function CloseIcon(props: { fontSize: string }) {
    return null;
}

export const FilterTaskList: React.FC = () => {

    const tags = useAppSelector(state => state.tagSlice.allTags)
    const [currentTag, setCurrentTag] = useState<string>(tags[0])

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [tag, setAddtag] = useState<string>('')
    const dispatch = useAppDispatch()

    const handleClick = (chip: any) => () => {
        setCurrentTag(chip)
    }


    function handleChange(e: any) {
        setAddtag(e.target.value)
    }

    function handleKeyDown(e: any) {
        if (e.key === 'Enter' && tag) {
            setAddtag(e.target.value)
            setIsOpen(false)
            if(tags.indexOf(e.target.value) === -1){
                dispatch(addTag(tag))

            }else{
                setOpen(true)
            }

        }
    }

    const [open, setOpen] = React.useState(false);


    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="primary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <>
            <h3>Метки</h3>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexFlow: 'row wrap'
            }}>
                {tags.map((tag, index) =>
                    <Chip
                        sx={{margin: '5px'}}
                        color='primary'
                        key={index}
                        icon={<LabelIcon color='error'/>}
                        variant={currentTag === tag ? 'filled' : 'outlined'}
                        label={tag}
                        onClick={handleClick(tag)}
                    />
                )}
                {isOpen ? (<Input placeholder="write tag"
                                  size="small"
                                  onKeyDown={handleKeyDown}
                                  value={tag}
                                  onChange={handleChange}/>) : (<Chip
                    sx={{margin: '5px'}}
                    label='add tag'
                    color='primary'
                    icon={<AddIcon/>}
                    clickable={true}
                    onClick={() => setIsOpen(true)}/>)}

            </Box>
            <h1> Входящие</h1>
            <TaskList flag={false} filter={currentTag}/>
            <h1> Выполненные</h1>
            <TaskList flag={true} filter={currentTag}/>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Такая метка уже есть"
                action={action}
            />
        </>
    )
}