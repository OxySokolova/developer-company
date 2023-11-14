import React from 'react';
import About from './About';
import './App.css';
import Video from './Video';
import Price from './Price';
import Feedback from './Feedback';
import Information from './Information';
import End from './End';
import logo from './villa-modified.png';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function App() {
  return (
    <Router>
    <div>
      <nav className="nav">
        <HashLink  to="/#about" className='item'>ABOUT US</HashLink>
        <HashLink to="/#projects" className=' item'>PROJECTS</HashLink>
        <img className="navLogo" src={logo} alt="logo" width="70px"/>
        <HashLink  to="/#process" className=' item'>PROCESS</HashLink>
        <HashLink  to="/#consultation" className=' item'>CONSULTATION</HashLink>
      </nav>
    <div>
      <Video />

      <section id="about" className='gap'><About /></section>

      <section id="projects"className='gap'><Price /></section>

      <section id="consultation"className='gap'><Feedback /></section>

      <section id="process"className='gap'><Information /></section>

      <End />
    </div>
    </div>
    </Router>
  );
}

export default App;
