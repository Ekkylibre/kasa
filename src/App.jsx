import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accommodation from './pages/accommodation/Accommodation';
import Error from './pages/error/Error_404';
import About from './pages/about/About';
import Home from './pages/home/Home';


function App() {
  return (<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/accommodation" element={<Accommodation />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Error />} />
  </Routes>
  )
}

export default App
