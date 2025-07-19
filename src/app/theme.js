// theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#444b4e' },
    secondary: { main: '#ffd700' },
    background: { default: '#f4f6f8' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1e1e1e' },
    secondary: { main: '#ffd700' },
    background: { default: '#121212' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
