import { useState } from "react";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ActionsButton from "./components/ActionsButton/ActionsButton";

import Navbar from "./components/Navbar/Navbar"
import Reviews from "./pages/Reviews/Reviews"
import CreateReview from "./pages/Reviews/CreateReview";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [openCreateReview, setOpenCreateReview] = useState(false);

  const handleOpenCreateReview = () => setOpenCreateReview(true)
  const handleCloseCreateReview = () => setOpenCreateReview(false)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Navbar />

        <Reviews />
        <CreateReview handleCloseCreateReview={handleCloseCreateReview} openCreateReview={openCreateReview} />

        <ActionsButton handleOpenCreateReview={handleOpenCreateReview} />
      </ThemeProvider>
    </>
  )
}

export default App
