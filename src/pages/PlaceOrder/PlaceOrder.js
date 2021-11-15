import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Card from "@mui/material/Card";
import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import order from "../../images/order/order.jpg";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [selectProperty, setSelectProperty] = useState({});
  useEffect(() => {
    fetch("https://morning-brushlands-15665.herokuapp.com/allProperty")
      .then((res) => res.json())
      .then((data) => {
        const property = data.find((el) => el.id == id);
        setSelectProperty(property);
      });
  }, []);

  const history = useHistory();

  const handleBookProperty = () => {
    const userName = user?.displayName;
    const email = user?.email;
    const status="pending";
    const bookInfo = { ...selectProperty };
    const { id, _id, ...info } = bookInfo;
    const data = { ...info };
    const userBookingInfo = { userName, email, ...data,status };
    fetch("https://morning-brushlands-15665.herokuapp.com/bookingInfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Congratulation.Your boking was successfully done.");
          history.push("/");
        }
      });
  };

  return (
    <div>
      <Navigation />
      <div
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(${order})`,
          height: "300px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          marginBottom: "50px",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
          }}
        >
          <Typography variant="h4" gutterBottom component="div">
            Our New Owner : {user?.displayName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            Email:{user?.email}
          </Typography>
        </Box>
      </div>
      <Container fixed>
        <Grid container spacing={6} sx={{ justifyContent: "center", mb: 4 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image="https://i.imgur.com/2kDvDfl.png"
                alt="green iguana"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4" gutterBottom component="div">
              Apartment
            </Typography>
            <Typography variant="h3" gutterBottom component="div">
              {selectProperty.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                BedRoom
              </Typography>
              <Typography variant="body2" gutterBottom>
                :0{selectProperty.bedroom}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                BathRoom
              </Typography>
              <Typography variant="body2" gutterBottom>
                :0{selectProperty.bathroom}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                DiningRoom
              </Typography>
              <Typography variant="body2" gutterBottom>
                :0{selectProperty.dining}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                Floors
              </Typography>
              <Typography variant="body2" gutterBottom>
                :0{selectProperty.floors}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                Garage
              </Typography>
              <Typography variant="body2" gutterBottom>
                :0{selectProperty.garage}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                Total Area
              </Typography>
              <Typography variant="body2" gutterBottom>
                :{selectProperty.area} sq.feet
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderTop: 1,
                borderBottom: 1,
                py: 1,
                my: 1,
              }}
            >
              <Typography variant="body2" gutterBottom>
                Per Month Rent Cost
              </Typography>
              <Typography variant="body2" gutterBottom>
                :${selectProperty.price}
              </Typography>
            </Box>
            <Button
              sx={{ width: "100%", p: 2 }}
              variant="contained"
              color="success"
              style={{ marginRight: "10px" }}
              onClick={() => {
                handleBookProperty();
              }}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default PlaceOrder;
