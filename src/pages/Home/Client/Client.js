import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

const Client = (props) => {
  const { name, position, description, image ,rating} = props?.el;
  return (
    <Card sx={{ maxWidth: 445,mx:"auto" ,my:8,ml:1}}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={image} sx={{ width: 70, height: 70 }} />
        }
        title={name}
        subheader={position}
        
      />

      <CardContent>
           <Rating name="half-rating-read" defaultValue={rating} precision={0.5}  readOnly />
        <Typography sx={{mt:2}} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Client;
