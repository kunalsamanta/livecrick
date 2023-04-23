import React, { useEffect, useState } from 'react';
import './App.css';
//import { Button } from "@mui/material";
import Navbar from './component/navbar';
import { getMatches } from './api/Api';
import MyCard from './component/card';
import { Container, Grid, }from "@mui/material";



function App() {


  const [matches, setMatches]=useState([]);

useEffect(()=>{
 getMatches()
 .then((data)=>{console.log("Data",data);setMatches(data.data);})
 .catch(error=>alert("could not load data"));

},[]);


  return (
    <div className="App">
      
     <Navbar></Navbar>
     <h1>welcome to my live Cricket App </h1>
     <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
