import React, { useState } from 'react';
import "./navbar.css"

function Navbar({ scrollToSection }) {
   
  return (
      <nav>
          <ul>
              <li onClick={() => scrollToSection("hello")}>Hello</li>
              <li onClick={() => scrollToSection('timeline')}>Timeline</li>
              <li onClick={() => scrollToSection('projects')}>Projects</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
      </nav>
  )
}

export default Navbar
