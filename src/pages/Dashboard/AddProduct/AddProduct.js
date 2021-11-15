import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton,InputAdornment } from "@mui/material";
import "./AddProduct.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
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


const AddProduct = () => {
  const classes=userStyles();
  
  const {
    handleSubmit,
    control,
    register,
    reset 
  } = useForm();
 
  const onSubmit = (data) => {
      data.image="https://i.imgur.com/2kDvDfl.png";
      console.log(data);
      fetch("https://morning-brushlands-15665.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        if (data.insertedId) {
            
           alert("Product was created successfully")
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
        <Paper elevation={0} sx={{color:'white'}}>
        
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="text"
                      label="Property Name"
                      inputRef={register("name", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
        
                
                <Controller
                  control={control}
                  name="location"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{ width:"100%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="text"
                      label="Property Location"
                      inputRef={register("location", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="image"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                    id="file"
                      style={{ width:"100%",margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="file"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment>
                            <IconButton>
                            <AiOutlineCloudUpload/>
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                      inputRef={register("image", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                     
                    />
                  )}
                />
               
               <Controller
                  control={control}
                  name="price"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{ width:"32%",margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px"  }}
                      type="number"
                      label="Per Month Price"
                      inputRef={register("price", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
               
                <Controller
                  control={control}
                  name="area"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px"  }}
                      type="number"
                      label="Total Area"
                      inputRef={register("area", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="bedroom"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Bedroom"
                      inputRef={register("bedroom", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
               
                <Controller
                  control={control}
                  name="bathroom"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Bathroom"
                      inputRef={register("bathroom", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
               
                <Controller
                  control={control}
                  name="dining"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Dining room"
                      inputRef={register("dining", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
             
                <Controller
                  control={control}
                  name="floors"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Floors"
                      inputRef={register("floors", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="garage"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Garage"
                      inputRef={register("garage", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
                
                <Controller
                  control={control}
                  name="build"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      style={{width:"32%", margin: "10px 0",marginRight:"8px",backgroundColor:"white",color:"gray",borderRadius:"5px" }}
                      type="number"
                      label="Build on"
                      inputRef={register("build", { required: true })}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  )}
                />
                
                <TextField
                  style={{ width:"32%",margin: "10px 0",cursor: "pointer" ,backgroundColor:"green",color:"white",borderRadius:"5px" }}
                  type="submit"
                  value="Add A Product"
                />
                
               
              </form>
             
          
    
    
        </Paper>
      </Box>
    </div>
  );
};

export default AddProduct;