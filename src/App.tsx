import { Container } from "@mui/material"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Technologies from "./components/Technologies"
import About from "./components/About"
import Footer from "./components/Footer"
import Feedback from "./components/Feedback"


function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Work />
      <Technologies />
      <About />
      <Feedback />
      <Footer />
    </Container>
  )
}

export default App
