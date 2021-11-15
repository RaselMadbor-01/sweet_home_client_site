import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Client from "../Client/Client";

const Testimonials = () => {
  const [clientInfo, setClientInfo] = useState([]);
  useEffect(() => {
    fetch("https://morning-brushlands-15665.herokuapp.com/allClientReview")
      .then((res) => res.json())
      .then((data) => {
       
        setClientInfo(data);
      });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container fixed>
      <Typography
        sx={{ textAlign: "center", mt: 16, mb: 4,fontWeight:"bold",color:"success.main" }}
        variant="h5"
        gutterBottom
        component="div"
      >
        TESTIMONIALS
      </Typography>
      <Typography
        sx={{ textAlign: "center" }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Our Clients Reviews and <br /> All of the Comments
      </Typography>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        arrows={false}
         autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {clientInfo.map((el) => (
          <Client el={el} key={el._id}></Client>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
