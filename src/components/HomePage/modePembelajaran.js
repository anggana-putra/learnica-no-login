import React from 'react';
import './modePembelajaran.css';
import rocket from '../../assets/rocket.png';
import planetO from '../../assets/planetO.png';
import pencils from '../../assets/Pencils.png';


function modePembelajaran() {
    return(
    <div>
        <div className="simulasiMode">
            <div className="gradientSimulasi"></div>
                <div className="wrap" id="wrap">
                <img className="rocket" src={rocket} alt="rocket"></img>
                <div className="siText">
                    <h2>Simulasi Mode</h2>
                    <p>Pecahkan objective dalam game dengan simulasi</p>
                </div>
            </div>
        </div>

        <div className="sandboxMode">
            <div className="gradientSandbox"></div>
                <div className="wrapSa">
                <img className="planetO" src={planetO} alt="planet"></img>
                <div className="saText">
                    <h2>Sandbox Mode</h2>
                    <p>Eksperimen sains secara bebas tanpa batas</p>
                </div>
            </div>
        </div>

        <div className="versusMode">
            <div className="gradientVersus"></div>
                <div className="wrapVe">
                <img className="pencils" src={pencils} alt="pencils"></img>
                <div className="veText">
                    <h2>Versus Mode</h2>
                    <p>Adu pengetahuan bersama player lain dan dapatkan rewards!</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default modePembelajaran