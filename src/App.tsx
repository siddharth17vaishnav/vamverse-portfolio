import { Container } from "@mui/material"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"


function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Work />
    </Container>
  )
}

export default App
