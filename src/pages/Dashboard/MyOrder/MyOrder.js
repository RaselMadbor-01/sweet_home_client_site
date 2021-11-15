import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://morning-brushlands-15665.herokuapp.com/myOrders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure? You want to delete this booking item"
    );
    if (proceed) {
      fetch(`https://morning-brushlands-15665.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const newOrders = orders.filter((item) => item.id != id);
            setOrders(newOrders);
            alert("Deleted Was Success.");
          }
        });
    }
  };

  return (
    <Grid container spacing={2}>
      {orders.map((el) => (
        <Grid key={el._id} item xs={12} sm={6}>
          <Card sx={{ maxWidth: 445 }}>
            <CardMedia
              component="img"
              height="140"
              image={el.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{fontWeight:"bold"}} component="div">
                {el.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  ${el.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {el.area}per/month
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                onClick={() => handleDelete(el._id)}
                style={{
                  backgroundColor: "white",
                  color: "red",
                  border: "1px solid red",
                }}
                startIcon={<DeleteIcon style={{ color: "red" }} />}
              >
                Delete
              </Button>
              <Button
                style={{
                  color: "white",
                  backgroundColor: `${
                    el.status === "pending" ? "gray" : "green"
                  }`,
                  padding: "10px 15px",
                  fontWeight: "600",
                  textTransform:"capitalize"
                }}
                size="small"
              >
                {el.status}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyOrder;
