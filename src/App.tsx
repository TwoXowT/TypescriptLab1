import React from 'react';

import './App.scss';

import {Container} from "@mui/material";
import {MainTaskList} from "./components/MainTaskList/MainTaskList";
import {FilterTaskList} from "./components/FilterTaskList/FilterTaskList";
import {Navbar} from "./components/Navbar/Navbar";

const App: React.FC = () => {


  return (
      <React.Fragment >
          <Container maxWidth='md' className="App">
              <Navbar/>

          </Container>

      </React.Fragment>

    
  );
}

export default App;
