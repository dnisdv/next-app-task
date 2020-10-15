import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CAE7FE',
    },
    secondary: {
      main: '#00BFA5',
    },

    error: {
      main: "#FF0000",
    },
    background: {
      default: '#fff',
    },
  },
  typography:{
    h7:{
      fontWeight:500,
      fontSize: "1.125rem"
    },
    htmlFontSize: 16,
    fontFamily: "Open Sans"
  },
  breakpoints:{
    values:{
      sm:320,
      lg:1308
    }
  }
});

export default theme;