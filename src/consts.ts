import {createTheme} from '@mui/material/styles';

export const API_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://wedding-be.onrender.com'
    : 'http://localhost:3001';

// TODO (brynn): use consts for colors

export const THEME = createTheme({
  palette: {
    primary: {
      main: '#f31495',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#ffffff',
    },
    background: {
      paper: '#f75cb5',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          margin: '2vw',
          padding: '2vw',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          opacity: 0.5,
          '&.Mui-checked': {
            opacity: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textAlign: 'left',
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '2vw',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '10px',
          color: '#ffffff',
          fontFamily: 'Libre Baskerville, serif',
          fontStyle: 'italic',
          fontSize: '0.9rem',
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
            opacity: 0.7,
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
              borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffffff',
            },
          },
        },
      },
    },
  },
});
