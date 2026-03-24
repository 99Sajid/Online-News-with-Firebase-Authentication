import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagogies=fetch('/categories.json').then((res)=>res.json());
const Catagories = () => {
  
    const catagory=use(catagogies);
 
    return (
        <div>
            <h1 className='font-semibold'>All Catagories {catagory.length}</h1>
             <div className='grid grid-cols-1 mt-4'>
             {
                catagory.map((category)=>(
                    <NavLink
                    key={category.id}
                    className={'btn bg-base-100 border-0 hover:bg-base-300 font-semibold text-accent'}
                    to={`/category/${category.id}`}>
                    {category.name}</NavLink>
                ))
             }
             </div>   
        </div>
    );
};

export default Catagories;