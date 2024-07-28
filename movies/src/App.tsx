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
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        
        <Navbar />

        <Reviews />
        <CreateReview handleCloseModal={handleCloseModal} openModal={openModal} />

        <ActionsButton handleOpenModal={handleOpenModal} />
      </ThemeProvider>
    </>
  )
}

export default App
