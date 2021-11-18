import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const [user,setUser] = useState([])
    useEffect(() =>{
        fetch('https://serene-falls-61146.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setUser(data))
    })
    //delete user
    const handleDeleteUser = id =>{
       const proceed = window.confirm('Are you sure ,you want to delete?');
       if(proceed){
            const url =`https://serene-falls-61146.herokuapp.com/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingUser = user.filter(us => us._id !==id)
                    setUser(remainingUser);
                }
            })
        }
    }
    return (
        <div className="text-center">
            <h1 className="text-center py-5">All Booking :{user.length}</h1>
            <ul>
                {
                    user.map(us => <li key ={us._id}><strong>Name:  </strong>{us.name} <strong>Email:  </strong> {us.email} 
                    <Link to={`/user/update/${us._id}`}>
                        <button className="btn btn-primary px-3 py-2 me-2 ms-2 m-3">Updata</button>
                    </Link>
                    <button onClick ={() => handleDeleteUser(us._id)} className="btn btn-danger px-3 py-2">X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrder;