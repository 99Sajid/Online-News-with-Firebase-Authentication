import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
        <div className=" bg-base-200  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h2 className='font-bold text-2xl text-center'>Register your account</h2>
                <fieldset className="fieldset">
                <label className="label">Name</label>
                  <input type="text" className="input" placeholder="Name" />
                  <label className="label">Photo url</label>
                  <input type="text" className="input" placeholder="Photo url" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input type="password" className="input" placeholder="Password" />
                  <div><a className="link link-hover">Forgot password?</a></div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <p className='font-semibold text-center'>Already Have an Account? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                </fieldset>
              </div>
          </div>
        </div>
                </div>
    );
};

export default Register;