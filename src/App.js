import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<About/>}/>
          <Route exact path="/projects" element={<Portfolio/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
