import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user ={email};
        fetch('https://serene-falls-61146.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        e.preventDefault();
    }
    return (
        <div className="mt-5 ms-3">
            <h1>Make a admin</h1>
           <form onSubmit={handleAdminSubmit}>
                <input onBlur={handleOnBlur} className=" py-2 px-3 rounded" type="email" placeholder="Email"></input>
                <button className="btn btn-primary py-2 px-3" type='submit'>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;