import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img,describtion,name,price,_id} = props.product
    return (
        <div className="container text-center">
        <div className="card shadow">
       <img  src={img} style={{height:"350px"}} className="card-img-top img-fluid top-0 tourCard" alt="..."/>
       <div className="card-body">
           <h4>{name}</h4>
           <h5>{price}</h5>
           <p className="card-text">{describtion}</p>
           <Link to={`/bookingBike/${_id}`}>
           <button className="btn btn-primary px-3 py-2">Book Now<i className="fas fa-shopping-cart ms-2"></i></button> 
           </Link>
       </div>
       </div> 
   </div>
    );
};

export default Product;