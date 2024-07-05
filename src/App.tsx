import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Contact from './pages/Contact';
import Participate from './pages/Participate';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  })

  return (
    <div>
      {
        isLoading ? (<div className=' h-[100vh] w-full flex items-center justify-center bg-[#17458f]'>
          <div className=' w-fit'>
            <h1 className=' font-bold text-3xl md:text-7xl text-white'>RC BIDA</h1>
            <div className=' underlineanimation h-[3px] bg-[#f7a81b]'></div>
          </div>
        </div>) : (<div>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/newsletter' element={<Newsletter />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/participate' element={<Participate />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>)
      }
    </div>
  )
}

export default App
