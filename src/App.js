import React from 'react';
import Navbar from './navbar/Navbar';
import Hello from './Hello/Hello';
import Timeline from './Timeline/Timeline';
import Projetcs from './Projects/Projetcs';
import Contact from "./Contact/Contact"
import "./App.css"
const App = () => {
 
  const scrollToSectio=(id)=>{
    const sect=document.getElementById(id);
    if (sect){
      sect.scrollIntoView({behavior:"smooth"});
    }
  }

  return (
    <div className='title-nav'>
      <Navbar scrollToSection={scrollToSectio} />
      <div id="hello" className="section">
        <Hello/>
      </div>
      <div id="timeline" className="section">
        <Timeline/>
      </div>
      <div id="projects" className="section">
        <Projetcs/>
      </div>
      <div id="contact" className="section">
        <Contact/>
      </div>
    </div>
  );
};

export default App;
