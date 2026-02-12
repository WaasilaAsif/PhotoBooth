import * as React from 'react';
import { useRef, useEffect } from 'react'
import Capture from './capture';
import Stream from './Stream';
import './styles/Capture.css'
const Booth = () =>{
 return(
  <>
  <div className="photo-booth">
    <Capture></Capture>
    </div>
  </>
 )
};

export default Booth