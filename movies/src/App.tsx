// MATERIAL UI -------------------------------------------------------------------------------------------------------------------------------------------------------------
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// REACT ROUTER DOM --------------------------------------------------------------------------------------------------------------------------------------------------------
import { BrowserRouter, Route, Routes } from "react-router-dom";

// COMPONENTS --------------------------------------------------------------------------------------------------------------------------------------------------------------
import Navbar from "./components/Navbar/Navbar"
import Reviews from "./pages/Reviews/Reviews"
import News from "./pages/News/News";
import TopMovies from "./pages/Top Movies/TopMovies";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  // API ----------------------------------------------------------
  // const moviesURL = 'https://api.themoviedb.org/3/movie/'
  // const apiKey = import.meta.env.VITE_API_KEY

  // const getTopRatedMovies = async (url: string) => {
  //   const res = await fetch(url)
  //   const data = await res.json()

  //   console.log('filmes:', data)
  // }

  // useEffect(() => {
  //   const topRatedURL = `${moviesURL}top_rated?${apiKey}`

  //   getTopRatedMovies(topRatedURL)
  // }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/reviews' element={
              <Reviews />
            } />

            <Route path="/news" element={
              <News />
            } />

            <Route path="/topmovies" element={
              <TopMovies />
            } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
