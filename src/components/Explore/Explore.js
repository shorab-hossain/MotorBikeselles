import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ExploreCard from '../ExploreCard/ExploreCard';

const Explore = () => {
    const [singleCards,setsingleCards] = useState([]);
    const history = useHistory();
    useEffect(() =>{
        fetch('https://serene-falls-61146.herokuapp.com/Bikes')
        .then(res => res.json())
        .then(data =>setsingleCards(data))
    },[]) 
    const handleButton = e =>{
        e.preventDefault();
        history.push('/explore')
    }
     return (
             <div className="container ">
            <p className="text-center mt-5 text-primary">All Products</p>
            <h1 className="text-center">Enjoy Riding</h1>
            <div className="card-container mb-5 mt-5 row row-cols-1 row-cols-md-3 g-4">
                {
                    singleCards.map(card =><ExploreCard key={card._id} card={card}></ExploreCard>)
                }
            </div>
    </div>
    );
};

export default Explore;