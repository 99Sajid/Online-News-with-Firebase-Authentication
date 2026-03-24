import React, {Suspense} from 'react';
import Catagories from './Catagories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div>Loadinggg......</div>} ><Catagories></Catagories></Suspense>
        </div>
    );
};

export default LeftAside;