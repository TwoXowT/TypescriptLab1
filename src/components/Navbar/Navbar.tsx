import React from 'react';
import {Box, Chip, Stack} from "@mui/material";
import './Navbar.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {MainTaskList} from "../MainTaskList/MainTaskList";
import {FilterTaskList} from "../FilterTaskList/FilterTaskList";

export const Navbar = () => {


    return (
        <Router>
            <Box className='navbar-container'>
                <Stack direction='row' spacing={1}>
                    <Chip label={<Link to='/'>Main</Link>}/>
                    <Chip label={<Link to='/filters'>Filters</Link>}/>
                </Stack>
            </Box>
            <Routes>
                <Route path="/" element={ <MainTaskList/>}/>
                <Route path="/filters" element={<FilterTaskList/>}/>
            </Routes>
        </Router>

    )
}