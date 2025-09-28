import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Provinsi from './pages/Provinsi';
import ProvinsiDetail from './pages/ProvinsiDetail';

const App = () => {
  return (
    <div className={`text-default min-h-screen transition-colors duration-300`}>
      <Navbar/>

      <div>
        <Routes>
          <Route path="/provinsi" element={<Provinsi />} />
          <Route path='/provinsi/:path' element={<ProvinsiDetail />}/>
        </Routes>
      </div>
      <Footer/>
      <img src="/papsel.webp" alt="" />
  </div>
  )
}

export default App
