import React from 'react';
import { Link } from 'react-router-dom';
import('./Bannar.css')

const Banner = () => {
    return (
        <div className="bannar container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="img-fluid" src="https://www.suzuki.com.bd/images/home_page/footer_image/footer_image__159048975448445.jpg" className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block ">
       <Link to="/booking">
           <btn className="btn btn-light text-primary fw-bold px-3 py-2 bannar-button">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
      </div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="https://www.suzuki.com.bd/images/home_page/footer_image/footer_image__159048975448445.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <Link to="/booking">
           <btn className="btn btn-light text-primary fw-bold px-3 py-2 bannar-button">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
</div>
    </div>
    <div className="carousel-item">
      <img className="img-fluid" src="https://www.suzuki.com.bd/images/home_page/footer_image/footer_image__159048975448445.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <Link to="/booking">
           <btn className="btn btn-light text-primary fw-bold px-3 py-2 bannar-button">Booking Now <i className="fas fa-arrow-to-right ms-2 mt-2"></i></btn>
       </Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;