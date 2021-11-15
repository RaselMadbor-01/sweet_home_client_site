import { makeStyles } from "@material-ui/core";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import aboutImage from "../../../images/about/about.png";
const userStyle=makeStyles((theme)=>({
    textSection:{
        textAlign:"left",
        [theme.breakpoints.down("sm")]: {
         textAlign:"center",
       },
    }
}))

const AboutUs = () => {
    const classes=userStyle();
  return (
    <Container fixed sx={{py:16}}>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}  sx={{ justifyContent: 'center',alignItems: 'center' }}>
        <Grid item xs={12} sm={6}>
          <img style={{width:"450px"}} src={aboutImage} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.textSection}>
        <Typography
        sx={{ textAlign: "flex-start", mt: 16, mb: 4,fontWeight:"bold",color:"success.main" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        ABOUT US
      </Typography>
          <Typography variant="h4" gutterBottom component="div">
            We Are the Best Service Provider All Over the World
          </Typography>
          <Typography sx={{mb:4,color:"text.secondary"}} variant="body2" gutterBottom>
            We are one of the best service provider & this will help you make a
            good property in the easiest way and this is one of the best and a
            proper way to buy of rent your suitable flat.
          </Typography>
          <Button variant="contained" color="success">
            Read More
          </Button>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
