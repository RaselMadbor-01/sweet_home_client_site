import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import useAuth from "../../../hooks/useAuth";
import { makeStyles } from "@material-ui/core";

const userStyles=makeStyles((theme)=>({
  fullWidth:{
    width:"628px",
    [theme.breakpoints.down("sm")]: {
      width:"100%"
    },
  }
}))

const MakeAdmin = () => {
  const classes=userStyles();
  const{token}=useAuth();
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const user = { email };
    fetch("https://morning-brushlands-15665.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "authorization":`Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {

        if(data.modifiedCount>0){
            reset();
            alert("Admin created successfully");
           
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
          alignContent: "center",
          "& > :not(style)": {
            m: 1,
            width:"100%",
            height: "100%",
            backgroundColor:"transparent",
          },
        }}
      >
        <Paper elevation={0}>
          <form
          style={{display:"flex",flexDirection:"row"}}
            onSubmit={handleSubmit(onSubmit)}
           
          >
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                style={{width:"100%", margin: "10px 0",marginRight:"10px",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                  type="email"
                  label="Email"
                  inputRef={register("email", { required: true })}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.email?.type === "required" && (
              <span
                style={{
                  color: "red",
                  position: "relative",
                  bottom: "-68px",
                  right: "233px",
                  margin: "0 -74px",
                }}
              >
                This field is required
              </span>
            )}

            <TextField
              style={{width:"35%", margin: "9px 0",cursor: "pointer" ,backgroundColor:"green",color:"white",borderRadius:"5px" }}
              type="submit"
              value="Make Admin"
            />
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default MakeAdmin;
