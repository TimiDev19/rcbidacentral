import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';
import Participate from './pages/Participate';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/newsletter' element={<Newsletter />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/participate' element={<Participate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
