import React from 'react';
import Swimmingimg from '../../assets/swimming.png'
import Classimg from '../../assets/class.png'
import PlayGroundimg from '../../assets/playground.png'
import Bgimg from '../../assets/bg.png'
const QZone = () => {
    return (
        <div>
        <div className='bg-base-200 p-2 space-y-4'>
            <h1 className='font-bold'>Q-Zone</h1>
            <div className='space-y-2'>
            <img src={Swimmingimg}/>
            <img src={Classimg}/>
            <img src={PlayGroundimg}/>
            
            </div>
            </div>
            <img src={Bgimg} className='mt-4'/>
        </div>
    );
};

export default QZone;