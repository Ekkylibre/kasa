import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accoommodation from './pages/Accommodation'
import Error from './pages/Error 404'

function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodation" element={<Accoommodation />} />
    <Route path="/error" element={<Error />} />
  </Routes>
  )
}

export default App
