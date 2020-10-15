import '../styles/globals.css'
import {ThemeProvider } from '@material-ui/core'
import React from 'react';
import theme from '../src/theme'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>)
}
  

  export default MyApp
