import { makeStyles } from "@material-ui/core";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import banner from "../../../images/banner/Apartment rent-amico.png";
import Navigation from "../../Shared/Navigation/Navigation";
import "./Banner.css";

const userStyles=makeStyles((theme)=>({
  banner:{
    height:"550px",
     [theme.breakpoints.down("md")]: {
      height:"650px",
    },
     [theme.breakpoints.down("sm")]: {
      height:"100%",
    },
  },
  bannerImage:{
    width:"600px",
    height:"500px",
    [theme.breakpoints.down("md")]: {
      display:"block",
     width:"500px",
     height:"450px",
     margin:"0 auto"
   },
    [theme.breakpoints.down("sm")]: {
      display:"block",
     width:"400px",
     height:"300px",
     margin:"0 auto"
   },

  },
  bannerHeader:{
    fontSize:"50px"
  }


}))


const Banner = () => {
  const classes=userStyles();
  return (
    <div
    style={{background:`linear-gradient( 240deg,rgba(151, 236, 101, 0.9) 50%, transparent 50%)`,backgroundRepeat:"no-repeat",}}
    className={classes.banner}
    >
      <Navigation/>

<Grid container spacing={2} sx={{display:"flex",justifyContent:'center',alignItems:"center",alignConent:"center"}}>
  <Grid item xs={12} md={6} >
    <img className={classes.bannerImage} src={banner} alt="" />
 
  </Grid>
  <Grid item xs={12} md={6} >
  <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems: 'center',textAlign:'center' ,paddingBottom:"35px"}}>
      <Typography variant="button" sx={{fontWeight: 'bold' }} display="block" gutterBottom>
        WELCOME TO US
      </Typography>
      <Typography variant="h2" sx={{fontWeight: 'bold',textAlign:"center"}}  style={{padding:"0 20px"}} component="div" gutterBottom>
        Find Your Dream Home Easily
      </Typography>
      <Typography sx={{px:8}} variant="subtitle1" gutterBottom component="div">
        We are one of the best service & property providers in the global
        market. We are effective.
      </Typography>
      <Box>
      <Button variant="contained" color="success" style={{marginRight:"10px"}}>Buy Now</Button>
      <Button variant="outlined" sx={{ borderColor: 'success.main',color:"success.main" }}>Rent Now</Button>
          </Box>
      </Box>
    
  </Grid>
  
</Grid>


     
    </div>
  );
};

export default Banner;
