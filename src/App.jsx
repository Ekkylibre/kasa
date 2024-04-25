import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Accoommodation from './pages/Accommodation/Accommodation'
import Error from './pages/Error/Error 404'
import About from './pages/About/About'

function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodation" element={<Accoommodation />} />
    <Route path="*" element={<Error />} />
    <Route path="/about" element={<About />} />
  </Routes>
  )
}

export default App
