import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ('./Header.css')

const Header = () => {
  const {user,logOut} = useAuth();
  
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
<Link className="navbar-brand" to="#"><img src="https://motors.stylemixthemes.com/rent-a-car/wp-content/uploads/sites/7/2017/01/motors_car_rental_logo.svg" alt="" /></Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
    </li>
    <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/products">Products</Link>
    </li>
    <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/reviews">Reviews</Link>
    </li>
    <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/explore">Explore</Link>
    </li>
    <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/about">About Us</Link>
     </li>
     <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/news">News</Link>
    </li>
     <li className="nav-item fw-bold">
      <Link className="nav-link active" to="/addReview">AddReview</Link>
    </li>
    {
      user.email &&
      <span className="text-primary mt-2 fw-bold ">
      {user.displayName}
      {user.img}
    </span>
    }
    {
      user.email && 
      <Link to="/dashboard">
     <button className=" btn btn-primary ms-2 me-2 ">Dashboard</button>
    </Link>
    }
   {
     user.email ? 
     <button className="nav-link active btn btn-danger ms-2" onClick={logOut}>LogOut</button>
      :
     <li className="nav-item fw-bold">
     <Link className="nav-link active" to="/login"><button className="btn btn-primary">Log In</button></Link>
   </li>
}
   
    
  </ul>
</div>
</div>
</nav>
    </div>
    );
};

export default Header;