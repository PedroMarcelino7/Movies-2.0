import Navbar from "./components/Navbar/Navbar"
import Reviews from "./pages/Reviews"
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
        <Reviews />
        <ActionsButton />
      </ThemeProvider>
    </>
  )
}

export default App
