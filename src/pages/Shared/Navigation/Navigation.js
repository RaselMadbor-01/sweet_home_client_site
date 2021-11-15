import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/logo/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";
import { makeStyles } from "@material-ui/core";

const userStyles = makeStyles((theme) => ({
  logo: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Navigation = () => {
  const classes = userStyles();
  const { user, logOut } = useAuth();
  const[navIcon,setNavIcon]=useState(false);
  const toggleIcon=()=>{
    setNavIcon(!navIcon);
    
  }
  console.log(navIcon);

  const navStyle = {
    textDecoration: "none",
    color: "Black",
    marginRight: "10px",
  };
  return (
   <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          color: "Black",
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ m: 0 }}
          >
            <img style={{ width: "50%" }} src={logo} alt="" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <span style={{ color: "green" }}>SWEET</span>/HOME
          </Typography>
          <Box className={classes.logoIcon}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ m: 0 }}
            onClick={toggleIcon}
          >
          <MenuIcon />
          </IconButton>
          </Box>
          <Box className={classes.logo}>
            <NavLink  className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="">
              Our Property
            </NavLink>
            <NavLink className="nav-link" to="">
              Review
            </NavLink>

            {user?.email ?<> 
              <NavLink className="nav-link" to="/allProperties">
              All Properties
            </NavLink>
              <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
              
              <Button variant="contained" onClick={logOut} color="success">
                LogOut
              </Button>
            </>: (
              <NavLink style={navStyle} to="/login">
                <Button variant="contained" color="success">
                  Login
                </Button>
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {
      navIcon&&<div style={{display:"flex",flexDirection:"column",margin:"0 20px",padding:"10px 20px",backgroundColor:"white",color:"black",textAlign:"right"}}>
      <NavLink  className="nav-bottom-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-bottom-link" to="/Product">
        Our Property
      </NavLink>
      <NavLink className="nav-bottom-link" to="/Review">
        Review
      </NavLink>

      {user?.email ?<> 
        <NavLink className="nav-bottom-link" to="/allProperties">
        All Properties
      </NavLink>
        <NavLink  className="nav-bottom-link" to="/dashboard">
        Dashboard
      </NavLink>
        
        <Button  sx={{ml:"auto",my:2}} variant="contained" onClick={logOut} color="success">
          LogOut
        </Button>
      </>: (
        <NavLink style={navStyle} to="/login">
          <Button className="nav-bottom-link" variant="contained" color="success">
            Login
          </Button>
        </NavLink>
      )}
    </div>
    }
   </div>
  );
};

export default Navigation;
