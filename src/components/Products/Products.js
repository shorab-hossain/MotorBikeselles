import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = (props) => {
    

    const [singleProducts,setSingleProducts] = useState([]);
    useEffect(() =>{
        fetch('https://serene-falls-61146.herokuapp.com/Bikes')
        .then(res => res.json())
        .then(data =>setSingleProducts(data))
    },[])
    return (
        <div className="container ">
        <p className="text-center mt-5 text-primary">Change Your Life</p>
        <h1 className="text-center">More Expensive Products</h1>
        <div className="card-container mb-5 mt-5 row row-cols-1 row-cols-md-3 g-4">
            {
                singleProducts.slice(0,6).map(product =><Product key={product._id} product={product}></Product>)
            }
        </div>
    </div>
    );
};

export default Products;