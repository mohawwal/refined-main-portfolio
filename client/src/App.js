import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
// import Body from './components/Body/Body.jsx'
import { BrowserRouter } from 'react-router-dom';
// import About from './components/About/About.jsx';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import profileImg from './components/File/Image/profile-img.JPG'
import AnimatedRoute from './components/pages/AnimatedRoute.js';

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <AnimatedRoute />
      </BrowserRouter>
    </div>
  )
}

export default App