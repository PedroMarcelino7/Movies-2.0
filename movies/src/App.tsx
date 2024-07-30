import { useEffect, useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ActionsButton from "./components/ActionsButton/ActionsButton";

import Navbar from "./components/Navbar/Navbar"
import Reviews from "./pages/Reviews/Reviews"
import CreateReview from "./pages/Reviews/CreateReview";
import EditReview from "./pages/Reviews/EditReview";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [openCreateReview, setOpenCreateReview] = useState(false);
  const [openEditReview, setOpenEditReview] = useState(false);

  const handleOpenCreateReview = () => setOpenCreateReview(true)
  const handleCloseCreateReview = () => setOpenCreateReview(false)

  const handleOpenEditReview = () => setOpenEditReview(true)
  const handleCloseEditReview = () => setOpenEditReview(false)

  const moviesURL = 'https://api.themoviedb.org/3/movie/'
  const apiKey = import.meta.env.VITE_API_KEY

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    console.log('filmes:', data)
  }

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedURL)
  }, [])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Navbar />

        <Reviews handleOpenEditReview={handleOpenEditReview} />
        <CreateReview handleCloseCreateReview={handleCloseCreateReview} openCreateReview={openCreateReview} />
        <EditReview handleCloseEditReview={handleCloseEditReview} openEditReview={openEditReview} />

        <ActionsButton handleOpenCreateReview={handleOpenCreateReview} />
      </ThemeProvider>
    </>
  )
}

export default App
