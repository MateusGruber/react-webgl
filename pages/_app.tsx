import { GlobalStyle, theme } from "../styles/themes";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
