import { Route, Routes } from 'react-router-dom';

import './main.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
