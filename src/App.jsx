import './app.css'
import Document from './components/Document'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { FaAngleUp } from "react-icons/fa";

function App() {

  return (
    <main className='container'>
      <NavBar />
      <Home />
      <Document />
      <Projects />
      <Skills />
      <Footer />
      <button className='up-arrow'>
        <a href="#home">
          <FaAngleUp />
        </a>
      </button>
    </main>
  )
}

export default App
