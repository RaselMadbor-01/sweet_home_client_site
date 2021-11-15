import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import googleLogo from "../../../images/logo/google.png";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { Alert, CircularProgress, IconButton } from "@mui/material";
import {
    useHistory,
    useLocation
  } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import { makeStyles } from "@material-ui/core";

const userStyles=makeStyles((theme)=>({
  fullWidth:{
    width:"528px",
    [theme.breakpoints.down("sm")]: {
      width:"100%"
    },
  },
  googleBtn:{
    paddingRight:"75px",
    [theme.breakpoints.down("sm")]: {
     paddingRight:"45px"
    },
  }
}))

const Login = () => {
  const classes=userStyles();
    const {user,error,signInLogin,isLoading,signInWithGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
  const {
    handleSubmit,
    control,
    register,
    reset ,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{ 
    signInLogin(data.email,data.password,location,history);
    reset();
alert("Your Login Was SuccessFull")};
const handleGoogleSignIn=()=>{
    signInWithGoogle(location,history)
}

  return (
    <div style={{backgroundColor:"rgb(190 252 181 / 50%)"}}>
      <Box
      className={classes.fullWidth}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          mx:"auto",
          "& > :not(style)": {
            m: 1,
           
            padding: "40px 40px",
            height: "100%",
          },
        }}
      >
        <Paper elevation={3} style={{margin:"25px 0"}}>
        <Box sx={{display:"flex",flexDecoration:"row",justifyContent:"center",alignItems:"center"}}>
      <IconButton
            size="large"
            edge="center"
            color="inherit"
            aria-label="menu"
            sx={{ m:0,p:0}}
          >
            <img style={{ width: "50%"}} src={logo} alt="" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            <span style={{ color: "green" }}>SWEET</span>/HOME
          </Typography>
      </Box>
         {
             isLoading?<CircularProgress color="success" /> : <>
              <Typography
            sx={{ textAlign: "left", my:2, fontWeight: "700" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            LogIn
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  style={{ width: "100%", margin: "10px 0" }}
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
              <span style={{ color: "red", marginLeft: "30px" }}>
                This field is required
              </span>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  style={{ width: "100%", margin: "10px 0" }}
                  type="password"
                  label="Password"
                  inputRef={register("password", { required: true })}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.password?.type === "required" && (
              <span style={{ color: "red", marginLeft: "30px" }}>
                This field is required
              </span>
            )}
            <TextField
              style={{ width: "100%", margin: "10px 0", cursor: "pointer",backgroundColor:'green',color:"white" }}
              type="submit"
              value="Sign In"
            />

            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              style={{ textAlign: "center" }}
            >
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </Typography>
           
          </form>
          <Typography variant="subtitle1" gutterBottom component="div" sx={{textAlign:"center"}} className="divider-text">
        OR
      </Typography>
          <Box onClick={handleGoogleSignIn} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",border:1,cursor:"pointer",borderColor: 'grey.500',alignContent:"center",width:"75%", borderRadius:16,p:1,mx:"auto"}}>
              <img style={{width:"35px"}} src={googleLogo} alt="" />
              <Typography variant="subtitle1" gutterBottom component="div" className={classes.googleBtn}>
        Continue with Google
      </Typography>
          </Box>
          
             </>
         }
         {
             user?.email&&<Alert severity="success">User Created SuccessFully</Alert>
         }
         {
             error&&<Alert severity="error">{error}</Alert>
         }

        </Paper>
      </Box>
    </div>
  );
};

export default Login;
