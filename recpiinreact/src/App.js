
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Herosection from './components/Herosection';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IoMail } from "react-icons/io5";
import Cart from './components/Cart';




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
          <Route exact path="/contact" element={<Contact text="VIA EMAIL FORM" icon={<IoMail style={{ marginLeft: '15px',marginTop:"0px",  fontSize: "20px" }}  />}/>} />
          <Route exact path="/Cart" element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
