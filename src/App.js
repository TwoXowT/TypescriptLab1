import React from 'react';

import './App.scss';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import {Container} from "@mui/material";
import {Navbar} from "./components/Navbar/Navbar";

const App =()=> {

  return (
      <div className='app'>
          <Navbar/>

          <Container maxWidth='md' className="App">
            <AddTask />
            <h1> Current task</h1>
            <TaskList flag={false} />
            <h1> Done task</h1>
            <TaskList flag={true}/>
          </Container>

      </div>

    
  );
}

export default App;
