import { useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ActionsButton from "./components/ActionsButton/ActionsButton";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  // MODAL CONTROLLER ---------------------------------------------
  const [openCreateReview, setOpenCreateReview] = useState(false);
  const [openEditReview, setOpenEditReview] = useState(false);

  const handleOpenCreateReview = () => setOpenCreateReview(true)
  const handleCloseCreateReview = () => setOpenCreateReview(false)

  const handleOpenEditReview = () => setOpenEditReview(true)
  const handleCloseEditReview = () => setOpenEditReview(false)

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
              <Reviews
                handleOpenEditReview={handleOpenEditReview}
                handleCloseCreateReview={handleCloseCreateReview}
                openCreateReview={openCreateReview}
                handleCloseEditReview={handleCloseEditReview}
                openEditReview={openEditReview}
              />
            } />

            <Route path="/news" element={
              <News />
            } />

            <Route path="/topmovies" element={
              <TopMovies />
            } />
          </Routes>

          <ActionsButton handleOpenCreateReview={handleOpenCreateReview} />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
