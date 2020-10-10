import React, { useState } from 'react';
import './PreLoader.css';

const PreLoader = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
      }, 2000
    );

    return ( 
        <div className={loading ? 'loader_bg' : 'loader_bg hide'}>
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <h2>Hello</h2>
            </div>
        </div>
    );

}

export default PreLoader;