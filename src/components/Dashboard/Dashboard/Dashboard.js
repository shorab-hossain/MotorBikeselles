import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import DashboardHome from "./DashboardHome/DashboardHome";
import ('./Dashboard.css')


const Dashboard = () => {
  
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5 className="text-center fw-bold pt-3">Dashboard</h5>
              <Link to='/reviews'>
                <li className="dashboard-menu mt-5 text-light text-center fw-bold">Reviews</li>
              </Link>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5 text-light text-center fw-bold">DashBoard</li>
              </Link>
              <Link to={`${url}/makeAdmin`}>
                <li className="dashboard-menu mt-5 text-light text-center fw-bold">MakeAdmin</li>
              </Link>
              <Link to={`${url}/addProducts`}>
                <li className="dashboard-menu mt-5 text-light text-center fw-bold">AddProducts</li>
              </Link>
              <Link to='/myOrder'>
                <li className="dashboard-menu mt-5 text-light text-center fw-bold">My Order</li>
              </Link>
            </div>
          </div>
              <div className="col-md-9">
              <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/makeAdmin`}>
                <MakeAdmin/>
            </Route>
            <Route path={`${path}/addProducts`}>
                <AddProduct/>
            </Route>
          </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
