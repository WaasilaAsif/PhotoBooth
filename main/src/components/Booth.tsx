import * as React from 'react';
import { useRef, useEffect } from 'react'
import Capture from './capture';
import Stream from './Stream';
import './styles/Capture.css'
const Booth = () =>{
 return(
  <>
  <div className="photo-booth">
    <div className='vid-container'>
    {/* <Stream /> */}
    </div>
    <Capture/>
    </div>
  </>
 )
};

export default Booth