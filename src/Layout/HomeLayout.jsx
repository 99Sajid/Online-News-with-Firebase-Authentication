import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import App from '../App';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RightAside from '../Component/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div className='border-2 w-[90%] mx-auto p-8'>
            <header>
            <Header></Header>
            <section>
            <LatestNews></LatestNews>
            </section>
            <nav>
            <Navbar></Navbar>
            </nav>
            </header>
            <main className='my-3  grid grid-cols-12 gap-3'>
            <aside className='col-span-3 sticky top-0 h-fit'>
            <LeftAside></LeftAside>
            </aside>
            <section className='main col-span-6'>
            {state=="loading" ? <Loading/> :<Outlet></Outlet>} 
            </section>
            <aside className='col-span-3 sticky top-0 h-fit'>
            <RightAside></RightAside>
            </aside> 
            </main>
        </div>
    );
};

export default HomeLayout;