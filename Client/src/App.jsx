import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Provinsi from './pages/Provinsi';
import ProvinsiDetail from './pages/ProvinsiDetail';
import Home from './pages/Home';
import { useAppContext } from './contexts/AppContext';
import About from './pages/About';

const App = () => {
  const { isDarkMode } = useAppContext(); 
  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} text-default min-h-screen transition-colors duration-300`}>
      <Navbar/>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jelajahi" element={<Provinsi />} />
          <Route path='/jelajahi/:path' element={<ProvinsiDetail />}/>
          <Route path="/tentang" element={<About />} />
        </Routes>
      </div>
      <Footer/>
      <img src="/papsel.webp" alt="" />
  </div>
  )
}

export default App
