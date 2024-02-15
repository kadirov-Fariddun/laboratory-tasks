import { Route, Routes } from 'react-router-dom';

import './main.css';
import Home from './Home';
import Pricing from './Pricing';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';



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
