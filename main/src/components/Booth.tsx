import * as React from 'react';
import { useRef, useEffect } from 'react'
import Capture from './capture';
import Stream from './Stream';

const Booth = () =>{
 return(
  <>
    <Stream/>
    {<Capture/>}
  </>
 )
};

export default Booth