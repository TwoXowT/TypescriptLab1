import React from 'react';

import './App.scss';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import {Container} from "@mui/material";

const App: React.FC = () => {


  return (
      <React.Fragment >
          <Container maxWidth='md' className="App">
            <AddTask />
            <h1> Current task</h1>
              <TaskList flag={false}/>
            <h1> Done task</h1>
              <TaskList flag={true}/>
          </Container>

      </React.Fragment>

    
  );
}

export default App;
