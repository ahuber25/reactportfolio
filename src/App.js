import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
