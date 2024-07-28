import Navbar from "./components/Navbar/Navbar"
import Movies from "./pages/Movies"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ActionsButton from "./components/ActionsButton/ActionsButton";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Movies />
        <ActionsButton />
      </ThemeProvider>
    </>
  )
}

export default App
