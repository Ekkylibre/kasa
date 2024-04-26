import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Accommodation from './pages/accommodation/Accommodation'
import Error from './pages/error/Error 404'
import About from './pages/about/About'


function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodation" element={<Accommodation />} />
    <Route path="*" element={<Error />} />
    <Route path="/about" element={<About />} />
  </Routes>
  )
}

export default App
