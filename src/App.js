import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/About/About';
import AddReview from './components/addReview/AddReview';
import BookingBike from './components/BookingBike/BookingBike';
import Contract from './components/Contract/Contract';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
// import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Bannar from './components/Home/Bannar/Bannar ';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import MyOrder from './components/MyOrder/MyOrder';
// import ManageServices from './components/ManageServices/ManageServices';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';
import Review from './components/Reviews/Review';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';

const App = () => {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Header/>
        <Switch>
        <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route path='/bannar'>
            <Bannar/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
          <Route path='/reviews'>
            <Review/>
            </Route>
          <Route path='/myOrder'>
            <MyOrder/>
            </Route>
          <PrivateRoute exact path='/explore'>
               <Explore/>
            </PrivateRoute>
          <Route path='/about'>
            <About/>
            </Route>
          <Route path='/news'>
            <News/>
            </Route>
            <Route path='/contract'>
                <Contract/>
            </Route>
            <Route path='/addReview'>
              <AddReview/>
              </Route>
            <Route path='/BookingBike/:id'>
              <BookingBike/>
              </Route>
            {/* <Route path='/manageService'>
              <ManageServices/>
              </Route> */}
            <Route path='/Login'>
                <Login/>
            </Route>
            <PrivateRoute path='/Dashboard'>
              <Dashboard/>
              </PrivateRoute>
            <Route path='/Register'>
                <Register/>
            </Route>
          <Route path='*'>
            <NotFound/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
    </AuthProvider>
    </div>
  );
};

export default App;