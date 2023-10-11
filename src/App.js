import React from 'react';
import About from './About';
import './App.css';
import Video from './Video';
import Price from './Price';
import Feedback from './Feedback';
import Information from './Information';
import End from './End';
import logo from './villa-modified.png';
import { HashLink } from 'react-router-hash-link';


function App() {
  return (
    <div>
      <nav className="nav">
        <HashLink  to="/#about" className='item'>ABOUT US</HashLink>
        <HashLink to="/#projects" className=' item'>PROJECTS</HashLink>
        <img src={logo} alt="logo" width="60px"/>
        <HashLink  to="/#process" className=' item'>PROCESS</HashLink>
        <HashLink  to="/#consultation" className=' item'>CONSULTATION</HashLink>
      </nav>
    <div>
      <Video />

      <section id="about"><About /></section>

      <section id="projects"><Price /></section>

      <section id="consultation"><Feedback /></section>

      <section id="process"><Information /></section>

      <End />
    </div>
    </div>
  );
}

export default App;
