import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Provinsi from './pages/Provinsi';

const App = () => {
  return (
    <div className={`text-default min-h-screen transition-colors duration-300`}>
      <Navbar/>

      <div>
        <Routes>
          <Route path="/provinsi" element={<Provinsi />} />
        </Routes>
      </div>
      <Footer/>
  </div>
  )
}

export default App
