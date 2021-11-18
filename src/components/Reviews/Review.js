import React,{useEffect,useState} from 'react';


const Review = () => {
  const [reviews,setReview] = useState([])
  useEffect(() =>{
    fetch('https://serene-falls-61146.herokuapp.com/review')
    .then(res => res.json())
    .then(data =>setReview(data))
  },[])
    return (
        <div className="row container mt-4 mb-4 mx-auto pb-5">
           <h1 className="text-center text-danger py-4 pb-5">All Customer Review</h1>
          {
            reviews?.map((review,index) =>             
              <div className="col-sm-12 col-md-6 col-lg-4 ">
              <div className="card">
                <div className="card-body bg-dark text-light">
                  <h5 className="card-title">{review?.name}</h5>
                  <p className="card-text">{review?.email}</p>
                  <p className="card-text">{review?.date}</p>
                  <p className="card-text">{review?.description}</p>
                  <i className="fas fa-star  text-warning"></i>
                  <i className="fas fa-star  text-warning"></i>
                  <i className="fas fa-star  text-warning"></i>
                </div>
              </div>
            </div>
            )
          }
      </div>
    );
};

export default Review;