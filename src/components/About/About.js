import React from 'react';

const About = () => {
    return (
        <div className=" col-lg-12 col-md-12">
            <div className="d-flex container">
            <div className="col-lg-12  col-md-12 ms-4  p-4 text-dark col-sm-12">
                <h1 className="mb-4">Enjoy Your Riding</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <p className="mb-4">Adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <button className="rounded btn text-light py-2 px-3" style={{background:'#20c997'}}><strong>News<i className=" ms-2 fas fa-arrow-to-right"></i></strong></button>
            </div>
            </div>
        </div>
    );
};

export default About;