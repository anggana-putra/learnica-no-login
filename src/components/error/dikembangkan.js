import React from 'react';
import IllustDikembangkan from '../../assets/illustDikembangkan.png';
import './dikembangkan.css';
function dikembangkan() {
    return(
        <div className="wrap-error">
            <img src={IllustDikembangkan} alt="illust error"/>
            <div className="text-error">
                <h1>Upss..</h1>
                <h3>Fitur Ini Masih Dikembangkan</h3>
            </div>
        </div>
    );
}

export default dikembangkan;