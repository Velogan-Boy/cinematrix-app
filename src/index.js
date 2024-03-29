import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import theme from './theme.js';

ReactDOM.render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
);
