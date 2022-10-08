import {createTheme} from '@mui/material/styles';

export const API_HOST = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

// TODO (brynn): use consts for colors
export const THEME = createTheme({
  palette: {
    primary: {
      main: '#f64aad',
    },
    secondary: {
      main: '#5d65fc',
    },
    error: {
      main: '#ffffff',
    },
    background: {
      paper: '#f766ba',
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
          margin: '5vh 0',
          padding: '3vh',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          opacity: 0.5,
          '&.Mui-checked': {
            color: '#ffffff',
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
          margin: '20px 0',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.9rem',
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ffffff',
          opacity: 0.2,
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
            '& .MuiOutlinedInput-input': {
              fontWeight: 500,
            },
          },
        },
      },
    },
  },
});
