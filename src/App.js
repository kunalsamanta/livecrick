import React, { Fragment, useEffect, useState } from 'react';
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
 .catch(error =>alert("could not load data"));

},[]);


  return (
    <div className="App">
      
     <Navbar></Navbar>
     <h1>welcome to my live Cricket App </h1>
     <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <Fragment key={match.unique_id}>
                {match.matchType === "t20"? (<MyCard key={match.unique_id} match={match}></MyCard>):("")}
              </Fragment>
            ))}
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
