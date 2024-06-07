"use client"

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { typography } from './themeValue.js';



const theme = createTheme({
  typography: {
    fontFamily: 'Pretendard',
    fontSize: 11,
    fontWeightLight: typography.weight.light,
    fontWeightRegular: typography.weight.regular,
    fontWeightMedium: typography.weight.medium,
    fontWeightBold: typography.weight.bold,
    h1: {
      color: 'rgb(0, 0, 0)',
      fontFamily: 'Pretendard',
      fontWeight: typography.weight.bold,
      fontSize: '25px',
      lineHeight: -1,
      letterSpacing: 0,
      textAlign: 'left',
    },
    timeSincePost: {
      color: 'rgb(168, 168, 168)',
      fontSize: typography.size.lg,
      fontWeight: typography.weight.light,
      lineHeight: typography.lineHeight.sm,
      letterSpacing: '-4%',
      textAlign: 'left',
      alignContent: 'center',
    },
  },
  palette: {
    background: {
      default: 'rgb(14, 14, 14)',
      //default: 'rgb(0, 0, 0)',
    },
    text: {
      //primary: 'rgb(255,255,255)',
      primary: 'rgb(0, 0, 0)'
    },
    primary: {
      main: 'rgb(0,0,0)',
    },
    white: {
      main: 'rgb(255,255,255)',
    },
    grey: {
      main: 'rgb(168,168,168)',
      light: 'rgb(215,215,215)',
      dark: 'rgb(86,87,87)',
    },
    star: {
      main: 'rgb(255, 196, 3)',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: 'rgb(52, 52, 52)',
          borderRadius: '16px',
          outline: 'none',
          background: 'rgb(22, 22, 22)',
          color: 'white',
          height: '46px',
          padding: '15px',
          '&::before': {
            content: 'none',
          },
          '&::after': {
            content: 'none',
          },
          fontSize: '14px',
        },
        input: { padding: '0px', lineHeight: '1', '&::placeholder': { color: 'white' } },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: 'rgb(52, 52, 52)',
          borderRadius: '16px',
          outline: 'none',
          background: 'rgb(22, 22, 22)',
          height: '46px',
          color: 'white',
          '&:hover': {
            '&& fieldset': {
              border: 'rgb(22, 22, 22)',
            },
          },
          fontSize: '14px',
        },
      },
    },
    
    MuiPagination: {
      styleOverrides: {
        root: {
       justifyContent:'center'
        },
      },
    },
  

    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',

          '@media (min-width:0px)': {
            paddingLeft: '0px',
            paddingRight: '0px',
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
