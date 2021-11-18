import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const {title,img} = props.news;
    
    return (
        <div className="container text-center w-100">
        <div className="card shadow " >
       <div>
            <img  src={img} style={{width:"350px"}} className="card-img-top img-fluid top-0 tourCard" alt="..."/>
            <img  src={img} style={{width:"350px"}} className="card-img-top img-fluid top-0 tourCard" alt="..."/>
            <img  src={img} style={{width:"350px"}} className="card-img-top img-fluid top-0 tourCard" alt="..."/>
       </div>
       <div className="card-body">
           <h5>{title}</h5>
           <Link to="/about">
           <button className="btn btn-primary px-3 py-2">Read more<i className="fas fa-shopping-cart ms-2"></i></button> 
           </Link>
       </div>
       </div> 
   </div>
    );
};

export default NewsCard;