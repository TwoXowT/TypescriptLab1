import React from 'react';
import {Box, Chip, Stack, useTheme} from "@mui/material";
import './Navbar.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {MainTaskList} from "../MainTaskList/MainTaskList";
import {FilterTaskList} from "../FilterTaskList/FilterTaskList";
import {SwitchModeButton} from "../../SwitchModeButton";

export const Navbar = () => {
    const theme = useTheme()
    const linkStyle = {
        textDecoration: "none",
        color: theme.palette.mode === 'dark' ? (theme.palette.grey[800]):(theme.palette.grey[50])
    };

    return (
        <Router>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
                className='navbar-container'>
                <Stack direction='row' spacing={1}>
                    <Chip color = 'primary' label={<Link style={linkStyle} to='/'>Входящие</Link>}/>
                    <Chip  color = 'primary'label={<Link  style={linkStyle} to='/filters'>Метки</Link>}/>
                </Stack>
                <SwitchModeButton />
            </Box>
            <Routes>
                <Route path="/" element={ <MainTaskList/>}/>
                <Route path="/filters" element={<FilterTaskList/>}/>
            </Routes>
        </Router>

    )
}