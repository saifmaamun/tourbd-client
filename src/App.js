import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import AuthProvider from './context/AuthProvider';
import Plans from './Pages/Plans/Plans';
import Places from './Pages/Places/Places';
import NavigationBar from './Pages/Shared/NavigationBar/NavigationBar';
import PlaceDetails from './Pages/PlaceDetails/PlaceDetails';
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import AddSpot from './Pages/AddSpot/AddSpot';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>

      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/places">
            <Places/>
          </Route>
          <Route path="/plans">
            <Plans/>
          </Route>
            <PrivateRoute path="/placeDetails/:id">
            <PlaceDetails/>
          </PrivateRoute>
            <PrivateRoute path="/order/:id">
            <Order/>
          </PrivateRoute>
            <PrivateRoute path="/myorder">
            <MyOrder/>
          </PrivateRoute>
            <PrivateRoute path="/manageorder">
            <ManageOrder/>
          </PrivateRoute>
            <PrivateRoute path="/addspot">
            <AddSpot/>
          </PrivateRoute>
          <Route path="/plans">
            <Plans/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signin/>
          </Route>
          </Switch>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
