import React from 'react';
import './Progress.css';


export default function Progress() {
  
  React.useEffect(() => {
    const knob = window.document.querySelector('.knob');
    const progress = window.document.querySelector('.progress')

    progress.addEventListener("mouseover", (event) =>knob.style.left = event.offsetX + "px")
   
  }, []);

  return (
    <div className="progress" >
        <div className="path comp"></div>
        <div className="knob comp" ></div>
    </div>
  )
}
