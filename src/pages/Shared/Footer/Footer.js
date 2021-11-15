import { Avatar, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../../images/logo/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useForm, Controller } from "react-hook-form";
import EmailIcon from '@mui/icons-material/Email';
import { BiRightArrowAlt } from "react-icons/bi";


const Footer = () => {
    const {
        handleSubmit,
        control,
        register,
        reset ,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{ 
        
        reset();
    alert("Your Login Was SuccessFull")};
  return (
    <Box  sx={{mt:16,px:2,py:16}} style={{color:"white",backgroundColor:"#2e7d32"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
          <Box sx={{display:"flex",flexDecoration:"row",justifyContent:"center",alignItems:"center",mb:2}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ m: 0,p:0 }}
          >
            <img style={{width:"40%",paddimg:"0"}} src={logo} alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>SWEET
          <span style={{ color: "black" }}>/HOME</span>
          </Typography>
          </Box>
            <Typography sx={{mb:2}} variant="body1" gutterBottom>
              This is the perfect four bedroom family home on an idyllic block,
              in one of Chicago's nicest suburbs.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{border:1,borderColor: 'grey.500'}} style={{backgroundColor:"green"}}>
                <FacebookRoundedIcon />
              </Avatar>
              <Avatar sx={{border:1,borderColor: 'grey.500'}} style={{backgroundColor:"green"}}>
                <TwitterIcon />
              </Avatar>
              <Avatar sx={{border:1,borderColor: 'grey.500'}} style={{backgroundColor:"green"}}>
                <InstagramIcon />
              </Avatar>
              <Avatar sx={{border:1,borderColor: 'grey.500'}} style={{backgroundColor:"green"}}>
                <LinkedInIcon />
              </Avatar>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="button" display="block" gutterBottom>
        Useful links
      </Typography>
      <List>
      <ListItem disablePadding>
            <ListItemButton component="a" href="#">
                <BiRightArrowAlt style={{fontSize:"20px",marginRight:"10px"}} />
              <ListItemText primary="Our Proverty" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <BiRightArrowAlt style={{fontSize:"20px",marginRight:"10px"}} />
              <ListItemText primary="About US" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <BiRightArrowAlt style={{fontSize:"20px",marginRight:"10px"}} />
              <ListItemText primary="Review" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
            <BiRightArrowAlt style={{fontSize:"20px",marginRight:"10px"}} />
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="button" display="block" gutterBottom>
        Get in touch
      </Typography>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="Sun - Fri: 8.00am - 6.00pm" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="2459 Autostrad St, London, UK" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalPhoneIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="+215-123-4567" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary="sweet@home.com" />
            </ListItemButton>
          </ListItem>
        </List>


        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="button" display="block" gutterBottom>
        Newsletter
      </Typography>
      <Typography variant="body1" gutterBottom>
      Our professional real estate team made sure you get the highest level of help with your property quests.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                  style={{ width: "100%", margin: "10px 0",backgroundColor:"white",color:"green",border:"none",borderRadius:"5px"}}
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
            <TextField
            id="subscribe-btn"
              style={{ width: "50%", margin: "10px 0", cursor: "pointer",backgroundColor:"green",border:"1px solid white",borderRadius:"5px" }}
              type="submit"
              value="Subscribe"
            />

          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
