import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cd2e35', // Red for accents
    },
    secondary: {
      main: '#000000', // Black for text and overlays
    },
    background: {
      default: '#ffffff', // White background
    },
    text: {
      primary: '#000000', // Black text
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 'Titillium Web',
      '-apple-system', 'BlinkMacSystemFont',
      '"Segoe UI"', '"Roboto"', '"Oxygen"',
      '"Ubuntu"', '"Cantarell"', '"Fira Sans"',
      '"Droid Sans"', '"Helvetica Neue"',
      'sans-serif'
    ].join(','),
  },
});

export default theme;
