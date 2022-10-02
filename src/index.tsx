import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import {THEME} from './consts';

const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={THEME}>
    <App />
  </ThemeProvider>,
);
