import React from 'react';
import './lanjutkan.css'
import astronomi from '../../assets/astronomi.png'

function lanjutkan(){
    return(
        <div className="wrapLan">
            <h2>Lanjutkan pembelajaranmu</h2>
            <div className="pembelajaranOne">
                <div className="wrap-pembelajaranOne">
                <img className="astronomi" src={astronomi} alt="planet"></img>
                <div className="asText">
                    <h2>Astronomi</h2>
                    <p>Bab 1</p>
                <div className="slide" id="slide"></div>
                <div className="slideB" id="slide"></div>
                </div>            
            </div>
        </div>
            <div className="wrap-riwayat">
                    <h2>Riwayat</h2>
                    <div className="riwayat">
                        <h3>KIMIA</h3>
                        <p>Kemarin</p>
                        <h1>Menyusun Atom</h1>
                        <button>Ulangi</button>
                    </div>
            </div>
    </div>
    );
}

export default lanjutkan