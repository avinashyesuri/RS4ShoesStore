
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Herosection from './components/Herosection';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IoMail } from "react-icons/io5";




function App() {


  return (
    <>

      <BrowserRouter>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/" element={<Herosection/>} />
          <Route exact path="/menu" element={<Menu/>} />
          <Route exact path="/location"  element={<Location/>} />
          <Route exact path="/about"  element={<About/>} />
          <Route exact path="/contact" element={<Contact text="VIA EMAIL" icon={<IoMail />}/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
