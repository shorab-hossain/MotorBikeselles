import React from 'react';

const Contract = () => {
    return (
        <div className="col-lg-12 row mt-5">
            <div className="col-lg-12 p-5 text-light text-center container fw-bold fs-3" style={{background:'#6610f2'}}>
                <h1> Contact Us.</h1>
                <p className="mt-3 text-light">All are customer Contract with our service Manager.If you help us.Enjoy your Riding.</p>
               <div>
               <i className="fas fa-phone-volume me-3 fs-2 p-3 mt-5" style={{background:'#3858af47'}}></i><strong>Call us now</strong>:+123 456 7890
               </div>
               <div className="mt-4">
               <i className="fas fa-envelope-open-text me-3 fs-2 p-3 "></i> <strong>Mail us</strong>:info@medenin.com
               </div>
            </div>
        </div>
    );
};

export default Contract;