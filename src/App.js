// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import NoPage from './routes/NoPage';
import Blog from './routes/Blog';
import Shop from './routes/Shop';
import Contact from './routes/Contact';
import Team from './routes/Team';
import Faq from './routes/Faq';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';


function App() {
  return (
    <div>
      <Navbar />
  <Whatsapp />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>
      <Footer />


    </div>
  ); 
}

export default App;
