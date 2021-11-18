import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const AddReview = () => {
    const { register,formState:{errors}, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://serene-falls-61146.herokuapp.com/review',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
            }
        })
    }
    
    ;

    return (
        <div>
        <h1 className="mt-5 text-center text-primary">
         products Review
        </h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2"
                />
                <br />
  
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="p-2 m-2"
                />
                <br />
                <input
                  {...register("date", { required: true })}
                  placeholder="date"
                  defaultValue={new Date()}
                  className="p-2 m-2"
                />
                <br />
                <input
                  {...register("description", { required: true })}
                  placeholder="Description"
                  className="p-2 m-2"
                />
                <br />
                <input type="submit" className="btn btn-primary text-light w-50" />
              </form>
              <p className="m-2 mb-2">
                already have account?{" "}
                <Link to="/register">
                  <span className="text-primary">create account</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddReview;