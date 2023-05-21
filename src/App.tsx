import { Container } from "@mui/material"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Technologies from "./components/Technologies"
import About from "./components/About"
import Footer from "./components/Footer"


function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Work />
      <Technologies />
      <About />
      <Footer />
    </Container>
  )
}

export default App
