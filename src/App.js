import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Experience from './pages/Experience';
import Information from './pages/Information';
import ImageGellery from './pages/ImageGallery';
import Crudlocal from './pages/Crudlocal';
import Crudapi from './pages/Crudapi';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      <Route path='/contact' element={<ContactUs />} />
      
        <Route path='/information' element={<Information />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/gallery' element={<ImageGellery />} />  
        <Route path='/crudlocal' element={<Crudlocal/>} />
        <Route path='/crudapi' element={<Crudapi/>} />
      </Routes>

    </div>
  );
}

export default App;
