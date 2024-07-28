import { useState } from "react";

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
