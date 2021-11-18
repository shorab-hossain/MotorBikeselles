import React from 'react';
import('./Footer.css')

const Footer = () => {
    return (
        <div>
             <div className="footer">
            <div className="container">
                <div className="row pt-4 text-light pb-5">
                    <div className="mb-4 mt-4 col-lg-4" style={{color:'#dededebd'}}>
                        <h1 className="fw-bold text-light">Suzuki Bike</h1>
                        <p>Joan Mir becomes 2020 MotoGP World Champion</p>
                        <h4><i className="fas fa-phone-volume me-3 fs-4">++018251651651</i></h4>
                        <h4><i className="fas fa-envelope-open-text me-3 "></i>BikeRider2121@gmail.com</h4>
                    </div>
                    <div className="p-4 col-lg-4 buttlet">
                        <h1 style={{color:'#5bc198'}}>Most Powerful Bike</h1>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>All bike</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Describtion</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Ours Services</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i> News</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Contract Us</a></li>
                        <li><a href="#"> <i className="fad fa-angle-double-right pe-2"></i>Detail</a></li>
                    </div>
                
                    <div className="p-4 col-lg-4 fs-2">
                         <i className="fab fa-facebook me-3 "></i>
                         <i className="fab fa-twitter me-3"></i>
                         <i className="fab fa-youtube danger mb-3"></i><br/>
                         <button className="btn btn-outline-primary px-4 py-3 mb-3">Find a Your Faviorite bike</button><br />
                            <button className="btn btn-outline-primary px-4 py-3 mb-3">Bike</button><br />
                            <button className="btn btn-outline-primary px-4 py-3">News</button><br />
                    </div>
                </div>
            </div>
           <div className="text-center">
                     <small className="text-center text-light">Design By <span className="text-danger">Shorab Hossain</span></small>s
           </div>
        </div>
        </div>
    );
};

export default Footer;