import * as React from 'react';
import { useRef, useEffect } from 'react'
import './App.css'
import Capture from './components/capture';
import Booth from './components/Booth';

function App() {
 return(
  <>
  <nav className="navbar">
  </nav>  
  <main className="booth">
    <Booth/>
  </main> 
  </>
 )
}

export default App