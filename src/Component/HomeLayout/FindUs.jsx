import React from 'react';
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const FindUs = () => {
    return (
        <div className='space-y-5'>
            <h2 className='font-bold'>Find Us On</h2>
            <div className='join join-vertical w-full '>
            <button className='btn bg-base-100 justify-start join-item'><FaFacebook/>Facebook</button>
            <button className='btn bg-base-100 justify-start join-item'><FaTwitter/>twitter</button>
            <button className='btn bg-base-100 justify-start join-item'><FaInstagram/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;