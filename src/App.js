import './App.css';
import React, { useState } from 'react';
import BoxDisplay from './Components/BoxDisplay/BoxDisplay';
import BoxForm from './Components/BoxForm/BoxForm';

function App() {
  const [currentBox, setCurrentColor] = useState( [] );
    
  const newBox = ( newColor, newWidth ) => {
      let boxArray = [...currentBox];
      boxArray.push( [newColor, newWidth] );
      setCurrentColor( boxArray );
  }

  return (
    <div className="App">
      <BoxForm newColor={ newBox } />
      <BoxDisplay box={ currentBox } />
    </div>
  );
}

export default App;
