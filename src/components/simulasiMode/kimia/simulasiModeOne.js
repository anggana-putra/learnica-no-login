import React from 'react'
import './simulasiModeOne.css'
import '../../quickBar.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

import charaOne from "../../../assets/charaOne.png";
import Nice from "../../../assets/nice.png"
import Lazy from "../../../assets/lazy.png"

function SimulasiModeOne() {
    const [Proton, setProton] = useState(0);
    const [Elektron, setElektron] = useState(0);
    const [Neutron, setNeutron] = useState(0);
    const [Kimia, setKimia] = useState("Kosong");
    const [Massa, setMassa] = useState({
        Helium: 4,
        Hidrogen: 1,
        Lithium: 7,
        Beryllium: 9,
    });

    const Ulangi = () => {
        setProton(0);
        setElektron(0);
        setNeutron(0);
        setKimia("Kosong");

        document.querySelector(".jawaban-benar").classList.remove("on-board-jawaban-benar");
        document.querySelector(".black-back").classList.remove("black-back-on");
        document.querySelector(".jawaban-salah").classList.remove("on-board-jawaban-salah");

        document.querySelector(".circle-one").classList.remove("circle-one-on");
        document.querySelector(".circle-three").classList.remove("circle-three-on");
        document.querySelector(".circle-two").classList.remove("circle-two-on");
        document.querySelector(".circle-four").classList.remove("circle-four-on");

        document.querySelector(".center-one").classList.remove("center-one-on");
        document.querySelector(".center-two").classList.remove("center-two-on");
        
        document.querySelector(".center-three").classList.remove("center-three-on");
        document.querySelector(".center-four").classList.remove("center-four-on");

    }

    const SetMaxMinPro = () => {
        if(Proton < 10) {
            setProton(Proton + 1)
        } if (Proton == 0) {
            document.querySelector(".center-three").classList.add("center-three-on");
        } if (Proton == 1) {
            document.querySelector(".center-four").classList.add("center-four-on");
        }
    }

    const SetMaxMinElek = () => {
        if(Elektron < 10) {
            setElektron(Elektron + 1)
        } if (Elektron == 0) {
            document.querySelector(".circle-one").classList.add("circle-one-on");
         } if (Elektron == 1) {
            document.querySelector(".circle-three").classList.add("circle-three-on");
         }  if (Elektron == 2) {
            document.querySelector(".circle-two").classList.add("circle-two-on");
         }  if (Elektron == 3) {
            document.querySelector(".circle-four").classList.add("circle-four-on");
         }
    }

    const SetMaxMinNeutron = () => {
        if(Neutron < 10) {
            setNeutron(Neutron + 1)
        } if (Neutron == 0) {
            document.querySelector(".center-one").classList.add("center-one-on");
        } if (Neutron == 1) {
            document.querySelector(".center-two").classList.add("center-two-on");
        }
    }

    const NeutronHe = Massa.Helium - Elektron;
    const NeutronHi = Massa.Hidrogen - Elektron;
    const NeutronLi = Massa.Lithium - Elektron;
    const NeutronBe = Massa.Beryllium - Elektron;

    const KimiaName = () => {
        if(Elektron == 2 && Neutron == NeutronHe && Proton == 2) {
            setKimia("He");
            document.querySelector(".jawaban-benar").classList.add("on-board-jawaban-benar");
            document.querySelector(".black-back").classList.add("black-back-on");
            
        } else if (Elektron == 1 && Neutron == NeutronHi && Proton == 1) {
            setKimia("Hi")
            document.querySelector(".jawaban-salah").classList.add("on-board-jawaban-salah");
            document.querySelector(".black-back").classList.add("black-back-on");
        } else if (Elektron == 2 && Neutron == NeutronLi && Proton == 3) {
            setKimia("Li")
            document.querySelector(".jawaban-salah").classList.add("on-board-jawaban-salah");
            document.querySelector(".black-back").classList.add("black-back-on");
        } else if (Elektron == 4 && Neutron == NeutronBe && Proton == 4) {
            setKimia("Be")
            document.querySelector(".jawaban-salah").classList.add("on-board-jawaban-salah");
            document.querySelector(".black-back").classList.add("black-back-on");
        } else {
        setKimia("Salah")
        document.querySelector(".jawaban-salah").classList.add("on-board-jawaban-salah");
        document.querySelector(".black-back").classList.add("black-back-on");
        }
    }

    const DataKimia = () => {
        document.querySelector(".kimia-card").classList.add("kimia-card-on");
    }

    const TutupDataKimia = () => {
        document.querySelector(".kimia-card").classList.remove("kimia-card-on");
    }
    return (
        <div className="all-simulasi">
            <div className="up-part-simulasi">
                <Link to='/babKimia-one'>
                <svg className="back" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 6.73483 15.8947 6.48052 15.7071 6.29302C15.5196 6.10552 15.2653 6.00018 15.0001 6.00018H3.41541L7.70893 1.70895C7.80189 1.616 7.87564 1.50564 7.92595 1.38418C7.97626 1.26272 8.00216 1.13255 8.00216 1.00108C8.00216 0.869618 7.97626 0.739441 7.92595 0.617984C7.87564 0.496527 7.80189 0.386168 7.70893 0.29321C7.61596 0.200251 7.5056 0.126512 7.38413 0.0762024C7.26266 0.0258932 7.13248 0 7.00101 0C6.86953 0 6.73935 0.0258932 6.61788 0.0762024C6.49642 0.126512 6.38605 0.200251 6.29308 0.29321L0.293755 6.29213C0.200639 6.385 0.126761 6.49533 0.0763536 6.6168C0.0259463 6.73827 0 6.86849 0 7C0 7.13151 0.0259463 7.26173 0.0763536 7.3832C0.126761 7.50467 0.200639 7.615 0.293755 7.70787L6.29308 13.7068C6.48084 13.8945 6.73548 14 7.00101 14C7.26653 14 7.52117 13.8945 7.70893 13.7068C7.89668 13.5191 8.00216 13.2644 8.00216 12.9989C8.00216 12.7334 7.89668 12.4788 7.70893 12.291L3.41541 7.99982H15.0001C15.2653 7.99982 15.5196 7.89448 15.7071 7.70698C15.8947 7.51948 16 7.26517 16 7Z" fill="#979797"/>
                </svg>
                </Link>
                <button id="btn-simulasi" className="quest"><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.53712 14.1343H5.5468M5.53712 3.49074H3.60193C3.08869 3.49074 2.59647 3.69463 2.23355 4.05754C1.87063 4.42046 1.66675 4.91268 1.66675 5.42593V17.037C1.66675 17.5503 1.87063 18.0425 2.23355 18.4054C2.59647 18.7683 3.08869 18.9722 3.60193 18.9722H13.2779C13.7911 18.9722 14.2833 18.7683 14.6462 18.4054C15.0092 18.0425 15.213 17.5503 15.213 17.037V5.42593C15.213 4.91268 15.0092 4.42046 14.6462 4.05754C14.2833 3.69463 13.7911 3.49074 13.2779 3.49074H11.3427H5.53712ZM5.53712 3.49074C5.53712 4.00399 5.741 4.49621 6.10392 4.85912C6.46684 5.22204 6.95906 5.42593 7.4723 5.42593H9.40749C9.92073 5.42593 10.413 5.22204 10.7759 4.85912C11.1388 4.49621 11.3427 4.00399 11.3427 3.49074H5.53712ZM5.53712 3.49074C5.53712 2.9775 5.741 2.48528 6.10392 2.12236C6.46684 1.75944 6.95906 1.55556 7.4723 1.55556H9.40749C9.92073 1.55556 10.413 1.75944 10.7759 2.12236C11.1388 2.48528 11.3427 2.9775 11.3427 3.49074H5.53712ZM8.4399 10.2639H11.3427H8.4399ZM8.4399 14.1343H11.3427H8.4399ZM5.53712 10.2639H5.5468H5.53712Z" stroke="#374842" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button id="btn-simulasi" className="rumus" onClick={DataKimia}><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8362 12.1661C16.5792 11.9082 16.252 11.7325 15.8956 11.6609L13.6989 11.2204C12.4948 10.9787 11.2448 11.1467 10.1465 11.6979L9.85389 11.8438C8.75562 12.3949 7.50563 12.563 6.30155 12.3213L4.52446 11.9648C4.22739 11.9052 3.92027 11.9202 3.63033 12.0083C3.3404 12.0964 3.07663 12.255 2.86241 12.47L16.8362 12.1661ZM6.31904 1.61111H13.6814L12.7611 2.53472V7.31164C12.7612 7.80151 12.9552 8.27128 13.3004 8.61762L17.9019 13.2357C19.0615 14.3994 18.2396 16.3889 16.5997 16.3889H3.39986C1.7599 16.3889 0.938993 14.3994 2.09856 13.2357L6.70004 8.61762C7.04524 8.27128 7.23923 7.80151 7.23934 7.31164V2.53472L6.31904 1.61111Z" stroke="#374842" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button id="btn-simulasi" className="pelajaran"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33333 16.5H6V22.3333H11.8333V20H8.33333V16.5ZM6 11.8333H8.33333V8.33333H11.8333V6H6V11.8333ZM20 20H16.5V22.3333H22.3333V16.5H20V20ZM16.5 6V8.33333H20V11.8333H22.3333V6H16.5Z" fill="#374842"/></svg></button>
            </div>
            <div className="objektif">
                <img src={charaOne} alt="chara"></img>
                <div className="ob-text-card">
                    <p>Bisakah kamu membuat atom Helium?</p>
                </div>
            </div>
            <div className="jawaban-benar">
                <img src={Nice} alt="nice"></img>
                <h3>Jawaban benar!</h3>
                <button onClick={Ulangi}>Ulangi</button>
                <p>Keluar</p>
            </div>
            <div className="jawaban-salah">
                <img src={Lazy} alt="Lazy"></img>
                <h3>Jawaban Salah!</h3>
                <button onClick={Ulangi}>Ulangi</button>
                <p>Keluar</p>
            </div>
            <div className="black-back"></div>
            <div className="canvasSimulasi">
                <div className="kimia-card">
                <svg onClick={TutupDataKimia} id="back-kimia-card" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.80281L13 12.7887M1 12.7887L13 1.80281L1 12.7887Z" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1>{Kimia}</h1>
                <div className="wrap-data-kimia">
                    <div id="data-kimia"  className="proton-data">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.0112" cy="11.5842" r="11.0112" fill="#F8818B"/>
                        <rect x="10" y="5" width="2" height="13" rx="1" fill="#FAFAFA"/>
                        <rect x="5" y="13" width="2" height="12" rx="1" transform="rotate(-90 5 13)" fill="#FAFAFA"/>
                        </svg>
                        <p>Proton: {Proton}</p>
                    </div>

                    <div id="data-kimia" className="Elektron">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.0112" cy="11.0112" r="11.0112" fill="#81B8F8"/>
                        <rect x="4.71899" y="12" width="2" height="12.5843" rx="1" transform="rotate(-90 4.71899 12)" fill="#FAFAFA"/>
                        </svg>
                        <p>elektron: {Elektron}</p>
                    </div>

                    <div id="data-kimia" className="neutron-data">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.0112" cy="11.764" r="11.0112" fill="#E5E5E5"/>
                        </svg>
                        <p>neutron: {Neutron}</p>
                    </div>
                    
                </div>
                </div>
                    <div className="round-group">
                        <div className="circle-one"></div>
                        <div className="circle-two"></div>
                        <div className="circle-three"></div>
                        <div className="circle-four"></div>
                    </div>
                    <div className="center-group">
                        <div className="center-one"></div>
                        <div className="center-two"></div>
                        <div className="center-three"></div>
                        <div className="center-four"></div>
                    </div>
                    <button id="cek-jawaban-btn" onClick={KimiaName}>Cek jawaban</button>
                <div className="set-tombol">
                    <button id="proton" onClick={SetMaxMinPro}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="0.25" width="6" height="35.3333" rx="3" fill="#FAFAFA"/><rect y="21" width="6" height="36" rx="3" transform="rotate(-90 0 21)" fill="#FAFAFA"/></svg></button>
                    <button id="elektron" onClick={SetMaxMinElek}><svg width="35" height="6" viewBox="0 0 35 6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6" width="6" height="34.6667" rx="3" transform="rotate(-90 0 6)" fill="#FAFAFA"/></svg></button>
                    <button id="neutron" onClick={SetMaxMinNeutron}></button>
                </div>
            </div>
        </div>
            );
}

export default SimulasiModeOne