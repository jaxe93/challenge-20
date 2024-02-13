import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import AboutMe from './components/AboutMe/AboutMe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button>somthing</Button>
      <header>
        header
      </header>
      <section>
        <AboutMe /> 
      </section>
      <footer>
        footer
      </footer>
    </>
  )
}

export default App


//if statments, and conditional rendering