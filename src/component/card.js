import { Button, Card, CardActions, CardContent, Typography ,Grid} from "@mui/material";
import React from "react";



const MyCard= ()=>{
    const getMyCart=()=>{
        return(
            <Card>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">First Team</Typography> 
                        </Grid>
                        <Grid item>
                           <img 
                           style={{width:85}}
                           src={require("../img/vs.jpg")}  alt=""/>
                        </Grid>
                        <Grid item> 
                            <Typography variant="h5">Second Team</Typography>
                        </Grid> 
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid  container justifyContent="center" >
                    <Button variant="contained"color="primary">
                        show details
                    </Button>
                    <Button variant="contained"color="primary">
                        {new Date().toString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>

        );
    };
return getMyCart();
};
export default MyCard;