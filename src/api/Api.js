//const API_KEY="74e5ed4d-c16f-4af2-90f1-1db1c9c65ec5"
//get all the upcoming matches
 export const getMatches=()=>{
    const url='https://api.cricapi.com/v1/cricScore?apikey=74e5ed4d-c16f-4af2-90f1-1db1c9c65ec5';
    //const url='https://cricket-live-data.p.rapidapi.com/series?apikey=aeadd91a99msh7fa2abf2a701e8bp144c5bjsn737104faecf1';
    
    return fetch(url)
    .then((Response)=> Response.json())
    .catch((error) => console.log("ERROR: ", 'error'));
 }
 

