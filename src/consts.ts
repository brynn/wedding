import {createTheme} from '@mui/material/styles';

export const API_HOST =
  process.env.NODE_ENV === 'production' ? 'website-be' : 'http://localhost:3001';

// TODO (brynn): use consts for colors

export const THEME = createTheme({
  palette: {
    primary: {
      main: '#f31495',
      light: '#ffffff',
    },
    error: {
      main: '#ffffff',
    },
    background: {
      paper: '#f75cb5',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '3vw',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '10px',
          color: '#ffffff',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#ffffff',
            opacity: 0.8,
          },
          '& label.Mui-focused': {
            color: '#ffffff',
            opacity: 1,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#f980c6',
            },
            '&:hover fieldset': {
              borderColor: '#f980c6',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f980c6',
            },
          },
        },
      },
    },
  },
});
