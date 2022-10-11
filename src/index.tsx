import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './store/store'
import {createTheme, ThemeProvider} from "@mui/material";

import { grey,red } from '@mui/material/colors';
const root = ReactDOM.createRoot(document.getElementById('root')!);
const theme = createTheme({

    palette:{
        primary:{
            main: grey[50],
            dark: grey[800],
        },
        secondary:{
            main: red[800],
            dark: red[800]
        },

    },

    typography:{
        fontFamily: 'Roboto',
    }


})

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
