import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import logo from '../../../images/logo/logo.png';
import ManageProducts from '../ManageProducts/ManageProducts';
import { ListItemButton } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import { AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBasketLine } from "react-icons/ri";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BsChatLeftDots } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";



const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const {admin,logOut}=useAuth();
 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
 
  const [title,setTitle]=useState("Dashboard");
  const handleToggle=(e)=>{
    setTitle(e.target.innerText)
  }
 

  const drawer = (
    <div>
      <Box sx={{display:"flex",flexDecoration:"row",justifyContent:"flex-start",alignItems:"center",pb:1}}>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ m: 0,px:0}}
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
      </Box>
      <Divider />
      {/* <Toolbar /> */}
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
          admin?<>
        <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/manageAllOrders`}>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage All Orders" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/addProduct`}>
            <ListItemButton>
              <ListItemIcon>
                <AiOutlinePlus />
              </ListItemIcon>
              <ListItemText primary="Add A Product" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/makeAdmin`}>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/manageProducts`}>
            <ListItemButton>
              <ListItemIcon>
                <RiShoppingBasketLine />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItemButton>
          </Link>
          </ListItem>
          </>:
          <>
          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}`}>
            <ListItemButton>
              <ListItemIcon>
                <RiShoppingBasketLine />
              </ListItemIcon>
              <ListItemText primary="My Order" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/payment`}>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link style={{textDecoration:"none",color:"#494848",fontWeight:"700"}} onClick={handleToggle} to={`${url}/review`}>
            <ListItemButton>
              <ListItemIcon>
                <BsChatLeftDots />
              </ListItemIcon>
              <ListItemText primary="Review" />
            </ListItemButton>
          </Link>
          </ListItem>
          </>}

          <ListItem disablePadding>
            <ListItemButton onClick={logOut}>
              <ListItemIcon>
                <BiLogOut />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>

        </List>
        </nav>
        </Box>
     
     
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundColor:"green"}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        style={{height:"100%",backgroundColor:"lightgray"}}
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />
        <Switch>
        <Route  exact path={`${path}`}>
          <MyOrder/>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute exact path={`${path}/manageAllOrders`}>
          <ManageAllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts />
        </AdminRoute>
      </Switch>
      
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default Dashboard;