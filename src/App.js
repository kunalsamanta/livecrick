import React from 'react';
import './App.css';
import { Button} from "@mui/material";
import navBar from './component/navbar';



function App() {
  return (
    <div className="App">
      <navBar/>
       <h2> hello</h2>
       <Button variant="outlined"
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
        
     
    </div>
  );
}

export default App;
