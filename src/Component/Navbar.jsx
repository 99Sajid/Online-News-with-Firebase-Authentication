import React,{use} from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import {AuthContext} from '../Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogOut=()=>{
        logOut().then(()=>{
           alert('Logout successful');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='flex justify-between items-center my-10'>
            <div >{user && user.name}</div>
            <div className='nav flex gap-5 text-accent'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/career' >Career</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
            <img src={userIcon} alt="User" />
            {
                user ? <button onClick={handleLogOut} className='btn btn-primary pr-10'>Logout</button> : <Link to='/auth/login' className='btn btn-primary pr-10'>Login</Link>
            }
            
            </div>
        </div>
    );
};

export default Navbar;