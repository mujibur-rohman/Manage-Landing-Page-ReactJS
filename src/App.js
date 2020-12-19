import React from 'react'
import Nav from './component/Nav/Nav'
import './App.css'
import Intro from './component/Intro/Intro'
import Services from './component/Services/Services'
import Testi from './component/Testi/Testi'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Services />  
      <Testi />  
      <Footer />
    </div>
  );
}

export default App;

