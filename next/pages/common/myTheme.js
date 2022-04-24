import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Cooper Black, KOMACON',
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#EE4E34',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },

});

export default theme