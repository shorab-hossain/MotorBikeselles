import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
    const [news,setNews] = useState([]);
    useEffect(() =>{
        fetch('https://serene-falls-61146.herokuapp.com/news')
        .then(res =>res.json())
        .then(data =>setNews(data))
    },[])
    return (
        <div className="container ">
        <h1 className="text-center">News</h1>
        <div className="card-container mb-5 mt-5 row row-cols-1 row-cols-md-3 g-4">
            {
                news.map(news =><NewsCard key={news._id} news={news}/>)
            }
        </div>
    </div>
    );
};

export default News;