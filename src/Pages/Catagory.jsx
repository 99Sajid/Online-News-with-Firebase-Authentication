import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const Catagory = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [categorynews,setCategorynews]=useState([]);
    // console.log(id,data);
    useEffect(()=>{
        if(id=="0"){
            setCategorynews(data);
            return;
        }else if(id=="1"){
            const filteredNews=data.filter((news)=>news.others.is_today_pick==true);
        
        setCategorynews(filteredNews);
        }else{
        const filteredNews=data.filter((news)=>news.category_id==id);
        
        setCategorynews(filteredNews);
        }
    },[data,id]);
    return (
        <div>
            <h2>Total {categorynews.length} news found</h2>
            <div className='grid grid-cols-1 gap-2'>
            {
                categorynews.map((news)=><NewsCard news={news}></NewsCard>)
            }
            </div>
        </div>

    );
};

export default Catagory;