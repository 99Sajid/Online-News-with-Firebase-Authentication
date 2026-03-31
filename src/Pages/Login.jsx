import React,{use} from 'react';
import { Link } from 'react-router';
import {AuthContext} from '../Provider/AuthProvider';

const Login = () => {
  const {signIn}=use(AuthContext);
  const handleLogin=(event)=>{
    event.preventDefault();
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password);
      signIn(email,password)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        alert('Login successful');
      })
      .catch(error=>{
        console.log(error);
      })
  }
    return (
        <div>
<div className=" bg-base-200  flex justify-center items-center">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h2 className='font-bold text-2xl text-center'>Login your account</h2>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center'>Don't Have an Account? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
        </fieldset>
      </form>
  </div>
</div>
        </div>
    );
};

export default Login;