import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from "../Shared/Footer/Footer";

const AllProperties = () => {
    const [propertys, setProperty] = useState([]);
    useEffect(() => {
      fetch("https://morning-brushlands-15665.herokuapp.com/allProperty")
        .then((res) => res.json())
        .then((data) => {
          setProperty(data);
        });
    }, []);
    return (
        <div>
            <Navigation/>
            <Container fixed style={{padding:"50px 0"}}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center",color:"success.main",mb:2 }}
        component="div"
        gutterBottom
      >
        All PROPERTY LIST
      </Typography>
      <Typography
        variant="h4"
        sx={{ textAlign: "center",mb:4 }}
        component="div"
        gutterBottom
        style={{color:"#5f5b5b"}}
      >
        Our Property and Its Availabilities <br /> and All Other Details
      </Typography>

      <Grid container spacing={4}>
  {
      propertys?propertys.map(item=><Grid key={item.id} item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345, boxShadow: 3  }} style={{backgroundColor:"rgb(190 252 181 / 50%)",margin:"0 auto"}}>
       <CardMedia
         component="img"
         height="75%"
         image={item.image}
         alt="green iguana"
       />
       <CardContent>
         <Box
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
             my: 0.5,
           }}
         >
           <Typography
             style={{ fontWeight: 800 ,color:"#5f5b5b"}}
             variant="button"
             gutterBottom
             display="block"
            
           >
             Apartment
           </Typography>
           <Typography variant="button" display="block" gutterBottom  style={{color:"#5f5b5b"}}>
            {item.area} Sq.feet
           </Typography>
         </Box>
         <Typography
           style={{ fontWeight: 800 ,color: '#5f5b5b'}}
           gutterBottom
           variant="h5"
           component="div"
         >
           {item.name}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           <LocationOnIcon /> {item.location}
         </Typography>
         <Box
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
             my: 2,
           }}
         >
           <Typography variant="body2" color="text.secondary">
             Dining: 0{item.dining}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Bedroom:0{item.bedroom}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Bathroom:0{item.bathroom}
           </Typography>
         </Box>
         <Box
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "flex-start",
           }}
         >
           <Typography
             style={{ marginRight: "40px" }}
             variant="body2"
             color="text.secondary"
           >
             Garages:0{item.garage}
           </Typography>
           <Typography variant="body2" color="text.secondary">
             Build:{item.build}
           </Typography>
         </Box>
         <Box
           sx={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
             mt: 2,
           }}
         >
           <Typography variant="h5" style={{ fontWeight: 800 ,color:"#5f5b5b"}}>
             ${item.price}
           </Typography>
          <Button size="small" style={{backgroundColor:"#5f5b5b"}}> <Link style={{textDecoration:"none",color:"white",padding:"5px 10px" }} to={`/order/${item.id}`}>
             Place Order
             </Link></Button>
         </Box>
       </CardContent>
     </Card>

     </Grid>):<CircularProgress color="success" />
  }
  
</Grid>


    </Container>
    <Footer/>

        </div>
    );
};

export default AllProperties;