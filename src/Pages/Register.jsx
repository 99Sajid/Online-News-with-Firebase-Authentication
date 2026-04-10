import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { use } from 'react';
import {AuthContext} from '../Provider/AuthProvider';

const Register = () => {
  const {createUser,setUser,updateUser}=use(AuthContext);
  const [nameError,setNameError]=useState('');
  const navigate=useNavigate();
  const HandleSubmit=(e)=>{
    e.preventDefault();
      const form=e.target;
      const name=form.name.value;
        if(name.length<5){
          setNameError('Name must be at least 5 characters long');
          return;
        }else{
          setNameError('');
        }
      const photoUrl=form.photoUrl.value;
      const email=form.email.value;
      const password=form.password.value;
      createUser(email,password)
      .then(result=>{
        const createdUser=result.user;
        updateUser({displayName:name,photoURL:photoUrl})
        .then(()=>{
          setUser({...createdUser,displayName:name,photoURL:photoUrl});
          navigate('/');
          //console.log('User profile updated successfully',createdUser);
        })
        .catch(error=>{
          setUser(createdUser);
          //console.log('Error updating user profile:',error);
        })
        
      })
      .catch(error=>{
        //console.log(error);
      });
  }
    return (
        <div>
        <div className=" bg-base-200  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h2 className='font-bold text-2xl text-center'>Register your account</h2>
                <form onSubmit={HandleSubmit}>
                <fieldset className="fieldset">
                <label className="label">Name</label>
                  <input name="name" type="text" className="input" placeholder="Name" required />
                  {nameError && <p className='text-red-500'>{nameError}</p>}
                  <label className="label">Photo url</label>
                  <input name="photoUrl" type="text" className="input" placeholder="Photo url" required />
                  <label className="label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Email" required />
                  <label className="label">Password</label>
                  <input name="password" type="password" className="input" placeholder="Password" required />
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button type="submit" className="btn btn-neutral mt-4">Register</button>
                  <p className='font-semibold text-center'>Already Have an Account? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                </fieldset>
                </form>
              </div>
          </div>
        </div>
                </div>
    );
};

export default Register;