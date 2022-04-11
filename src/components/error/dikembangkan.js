import React from 'react';
import IllustDikembangkan from '../../assets/illustDikembangkan.png';
import './dikembangkan.css';
function dikembangkan() {
    return(
        <div className="wrap-error">
            <h1>Upss.. Fitur Ini Masih Dikembangkan</h1>
            <img src={IllustDikembangkan} alt="illust error"/>
        </div>
    );
}

export default dikembangkan;