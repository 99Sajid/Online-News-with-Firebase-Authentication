import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    
    return (
        <div>
           <img 
           className='w-full h-96 object-cover'
           src={news.image_url} alt=""
           />
           <h2 className='text-xl font-bold'>{news.title}</h2>
              <p className='text-sm text-red-400'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Back to Category</Link>
              </div>
    );
};

export default NewsDetailsCard;