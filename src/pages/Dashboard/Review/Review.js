import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
    FormControl,
  InputLabel,
  OutlinedInput,
  Rating,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const userStyles=makeStyles((theme)=>({
  fullWidth:{
    width:"528px",
    [theme.breakpoints.down("sm")]: {
      width:"100%"
    },
  },
  submitBtnColor:{
    color:'white'
  }
}))

const Review = () => {
  const classes=userStyles();
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(2);
  const onSubmit = (data) => {
      const review=data;
      const newReview={rating,...review}
      fetch("https://morning-brushlands-15665.herokuapp.com/clientReview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Thankyou for the review that you give us.");
            reset();
            
          }
        });
  };

  return (
    <div style={{}}>
      <Box
      className={classes.fullWidth}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "flex-start",
          "& > :not(style)": {
            m: 1,
            height: "100%",
            backgroundColor:"transparent",
          },
        }}
      >
        <Paper elevation={0}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                style={{width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                  type="text"
                  label="Your Name"
                  inputRef={register("name", { required: true })}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.name?.type === "required" && (
              <span style={{ color: "red", marginLeft: "30px" }}>
                This field is required
              </span>
            )}
            <Controller
              control={control}
              name="position"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                style={{width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                  type="text"
                  label="Company name/ Designation"
                  inputRef={register("position", { required: true })}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.position?.type === "required" && (
              <span style={{ color: "red", marginLeft: "30px" }}>
                This field is required
              </span>
            )}
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                style={{width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                  type="text"
                  multiline
                  rows={5}
                  label="Description"
                  inputRef={register("description", { required: true })}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.description?.type === "required" && (
              <span style={{ color: "red", marginLeft: "30px" }}>
                This field is required
              </span>
            )}
            <FormControl fullWidth sx={{ m: 1 }}  style={{width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Select-Rating
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <Rating
                    name="half-rating"
                    defaultValue={rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                }
                label="Amount"
              />
            </FormControl>

            <TextField
              style={{  width:"32%",margin: "10px 0",cursor: "pointer" , backgroundColor:"green",color:"white",borderRadius:"5px" }}
              type="submit"
              value="Submit"
            />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default Review;
