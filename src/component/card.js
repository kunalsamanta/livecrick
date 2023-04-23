import { Button, Card, CardActions, CardContent, Typography ,Grid} from "@mui/material";
import React from "react";



const MyCard= ({ match })=>{
    const getMyCart=()=>{
        return(
            <Card style={{margin:15}}>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">{match["t1"]}</Typography> 
                            <Typography variant="3">{match["t1s"]}</Typography>
                        </Grid>
                        <Grid item>
                           <img 
                           style={{width:85}}
                           src={require("../img/vs.jpg")}  alt=""/>
                        </Grid>
                        <Grid item> 
                            <Typography variant="h5">{match["t2"]}</Typography>
                            <Typography variant="3">{match["t2s"]}</Typography>
                        </Grid> 
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid  container justifyContent="center" >
                    <Button style={{margin:15}} variant="contained"color="primary">
                        show details
                    </Button>
                    <Button variant="contained"color="primary">
                        start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>

        );
    };
return getMyCart();
};
export default MyCard;