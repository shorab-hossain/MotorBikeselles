// import React, { useEffect, useState } from 'react';

// const ManageServices = () => {
//     const [bikeService,setBikeServices] = useState([]);
//     useEffect(() =>{
//         fetch('http://localhost:5000/Bikes')
//         .then(res =>res.json())
//         .then(data =>setBikeServices(data))
//     },[])
//     const handleDelete = id =>{
//         const url = `http://localhost:5000/Bikes/${id}`;
//         fetch(url,{
//             method:'DELETE'
//         })
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data);
//             const remaining = service.filter(service => service._id !== id);
//             setBikeServices(remaining);
//         })
    
    
//     }
//     return (
//         <div>
//             <h1>Manage Services</h1>
//             {
//                 bikeService.map(service =><div key={service.id}>
//                     <h3>{service.name}</h3>
//                     <button onClick={() =>handleDelete(service.id)}>Delete</button>
//                     </div>)
//             }
//         </div>
//     );
// };

// export default ManageServices;