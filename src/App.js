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
        <Route path='/shr-leo-app/' exact element={<Home />} />
        <Route path='/shr-leo-app/about' exact element={<About />} />

        <Route path='/shr-leo-app/contact' element={<ContactUs />} />

        <Route path='/shr-leo-app/information' element={<Information />} />
        <Route path='/shr-leo-app/experience' element={<Experience />} />
        <Route path='/shr-leo-app/gallery' element={<ImageGellery />} />
        <Route path='/shr-leo-app/crudlocal' element={<Crudlocal />} />
        <Route path='/shr-leo-app/crudapi' element={<Crudapi />} />
      </Routes>

    </div>
  );
}

export default App;
