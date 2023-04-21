import React, { useEffect } from 'react';
import './App.css';
import { Button } from "@mui/material";
import Navbar from './component/navbar';
import { getMatches } from './api/Api';
import MyCard from './component/card';




function App() {
useEffect(()=>{
 getMatches().then((data)=>console/console.log("DATA: ", data))
 .catch(error=>alert("could not load data"));

},[]);


  return (
    <div className="App">
     <Navbar></Navbar>

     <MyCard></MyCard>
       <h2> hello</h2>
       <Button variant="outlined"
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
      {}
     
    </div>
  );
}

export default App;
