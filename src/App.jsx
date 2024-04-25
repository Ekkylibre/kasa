import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accoommodation from './pages/Accommodation'
import Error from './pages/Error 404'
import About from './pages/About'

function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodation" element={<Accoommodation />} />
    <Route path="/error" element={<Error />} />
    <Route path="/about" element={<About />} />
  </Routes>
  )
}

export default App
