import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3 my-10'>
            <p className='text-base-100 bg-secondary p-2'>Latest</p>
           <Marquee>
           <p>This blog has stories about how different fonts were designed for various languages and scripts</p>
            </Marquee>
           </div>
    );
};

export default LatestNews;