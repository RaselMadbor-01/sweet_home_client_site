import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IoKeyOutline } from "react-icons/io5";
import serviceImage from "../../../images/banner/service.jpg";
import "./Services.css";
import { makeStyles } from "@material-ui/core";

const userStyles=makeStyles((theme)=>({
    serviceBanner:{
        height:"320px",
        margin:"50px 0",
        [theme.breakpoints.down("md")]: {
         height:"650px",
         padding:"15px 0"
       },
        [theme.breakpoints.down("sm")]: {
         height:"100%",
       },
    },
}))

const Services = () => {
    const classes=userStyles();
  return (
    <div className="service-section">
        <Typography
        sx={{ textAlign: "center", mt: 16, mb: 4,color:"success.main",fontWeight:"bold" }}
        variant="h5"
        gutterBottom
        component="div"
        className='service-header'
      >
        OUR BEST SERVICES
      </Typography>
        <Box style={{ background:`linear-gradient( rgba(129, 240, 64, 0.5) 100%, rgba(69, 99, 45, 0.5)100%),url(${serviceImage})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundPosition:"center"}} className={classes.serviceBanner}>
        <Box sx={{ flexGrow: 1 ,px:2,my:16}}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345,textAlign:"center",py:4,mx:'auto' }} className="cardHover">
            <CardActionArea>
              <IoKeyOutline style={{fontSize:"50px",fontWeight:"500",pt:16,}} />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                  Ouick Deals
                </Typography>
                <Typography variant="body2" >
                  Interior of volumes, space, air, with certain
                  light and mood. These interiors are meant to last forever.
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345,textAlign:"center",py:4,mx:"auto" }} className="cardHover">
            <CardActionArea>
              <ThumbUpOffAltIcon style={{fontSize:"50px",fontWeight:"500",pt:16,}} />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                  Experience
                </Typography>
                <Typography variant="body2">
                  We have a lot of good property and one of that is this
                  property and for that we have arranged a catalogue for your.
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345,textAlign:"center",py:4 ,mx:"auto"}} className="cardHover">
            <CardActionArea>
              <StarOutlineIcon  style={{fontSize:"50px",fontWeight:"500",pt:16,}}/>
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                  Exclusive Offers
                </Typography>
                <Typography variant="body2">
                We are one of the best company & you can easily change and shipped to the home at any time.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: 345,textAlign:"center",py:4,mx:"auto" }} className="cardHover">
            <CardActionArea>
              <FavoriteBorderIcon style={{fontSize:"50px",fontWeight:"500",pt:16,}} />
              <CardContent>
                <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                  Happy Clients
                </Typography>
                <Typography variant="body2" >
                 Client satisfaction is our one and only achive.If our client is satisfy then we think that we has achive some things
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </div>
  );
};

export default Services;
