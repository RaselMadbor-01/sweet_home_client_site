import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AllProperties from './pages/AllProperties/AllProperties';
import Notfound from './pages/Notfound/Notfound';

function App() {
  return (
   <AuthProvider>
      <Router>
    
    <Switch>
      <Route exact path="/">
        <Home />
        </Route>
      <Route path="/home">
        <Home />
        </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/allProperties">
        <AllProperties />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <PrivateRoute path="/order/:id">
        <PlaceOrder/>
      </PrivateRoute>
      <Route path="*">
        <Notfound />
      </Route>
    </Switch>

</Router>
   </AuthProvider>
  );
}

export default App;
