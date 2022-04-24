import React from 'react'
import rocket from '../../../assets/rocket.png';
import { Link } from 'react-router-dom';
import './babKimia.css';

function babKimia() {
    return(
        <div class="all-bab">        
        <div class="top-part-simo">
            <Link to='/simulasiMode'>
            <svg className="back" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 6.73483 15.8947 6.48052 15.7071 6.29302C15.5196 6.10552 15.2653 6.00018 15.0001 6.00018H3.41541L7.70893 1.70895C7.80189 1.616 7.87564 1.50564 7.92595 1.38418C7.97626 1.26272 8.00216 1.13255 8.00216 1.00108C8.00216 0.869618 7.97626 0.739441 7.92595 0.617984C7.87564 0.496527 7.80189 0.386168 7.70893 0.29321C7.61596 0.200251 7.5056 0.126512 7.38413 0.0762024C7.26266 0.0258932 7.13248 0 7.00101 0C6.86953 0 6.73935 0.0258932 6.61788 0.0762024C6.49642 0.126512 6.38605 0.200251 6.29308 0.29321L0.293755 6.29213C0.200639 6.385 0.126761 6.49533 0.0763536 6.6168C0.0259463 6.73827 0 6.86849 0 7C0 7.13151 0.0259463 7.26173 0.0763536 7.3832C0.126761 7.50467 0.200639 7.615 0.293755 7.70787L6.29308 13.7068C6.48084 13.8945 6.73548 14 7.00101 14C7.26653 14 7.52117 13.8945 7.70893 13.7068C7.89668 13.5191 8.00216 13.2644 8.00216 12.9989C8.00216 12.7334 7.89668 12.4788 7.70893 12.291L3.41541 7.99982H15.0001C15.2653 7.99982 15.5196 7.89448 15.7071 7.70698C15.8947 7.51948 16 7.26517 16 7Z" fill="#979797"/>
            </svg>
            </Link>
            <p id="simo-p-up-part">Simulation Mode</p>
        </div>
        <div class="middle-part-up-simo">
            <img className="rocket" src={rocket} alt="rocket"></img>
        </div>    
            <div class="top-bab">
                <h3>Kimia</h3>
                <svg id="bab-kimia-filter" width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 13C25 12.7348 24.8903 12.4804 24.6949 12.2929C24.4996 12.1054 24.2346 12 23.9583 12H17.7083C17.4321 12 17.1671 12.1054 16.9718 12.2929C16.7764 12.4804 16.6667 12.7348 16.6667 13C16.6667 13.2652 16.7764 13.5196 16.9718 13.7071C17.1671 13.8946 17.4321 14 17.7083 14H23.9583C24.2346 14 24.4996 13.8946 24.6949 13.7071C24.8903 13.5196 25 13.2652 25 13ZM25 7C25 6.73478 24.8903 6.48043 24.6949 6.29289C24.4996 6.10536 24.2346 6 23.9583 6H9.375C9.09873 6 8.83378 6.10536 8.63843 6.29289C8.44308 6.48043 8.33333 6.73478 8.33333 7C8.33333 7.26522 8.44308 7.51957 8.63843 7.70711C8.83378 7.89464 9.09873 8 9.375 8H23.9583C24.2346 8 24.4996 7.89464 24.6949 7.70711C24.8903 7.51957 25 7.26522 25 7ZM25 1C25 0.734784 24.8903 0.48043 24.6949 0.292893C24.4996 0.105357 24.2346 0 23.9583 0H1.04167C0.765399 0 0.500448 0.105357 0.305097 0.292893C0.109747 0.48043 0 0.734784 0 1C0 1.26522 0.109747 1.51957 0.305097 1.70711C0.500448 1.89464 0.765399 2 1.04167 2H23.9583C24.2346 2 24.4996 1.89464 24.6949 1.70711C24.8903 1.51957 25 1.26522 25 1Z" fill="#979797"/>
                </svg>
            </div>
            <div class="bab-data">
            <Link to="/BabKimia-one" style={{textDecoration:"none"}}> 
                <div id="bab" class="bab-one">
                    <h4>Bab 1</h4>
                    <p>Atom, senyawa, dan ion</p>
                </div>
            </Link>
                <div id="bab" class="bab-two">
                    <h4>Bab 2</h4>
                    <p>Tabel Periodik</p>
                </div>
                <div id="bab" class="bab-three">
                    <h4>Bab 3</h4>
                    <p>Ikatan kimia</p>
                </div>
                <div id="bab" class="bab-four">
                    <h4>Bab 4</h4>
                    <p>Ini bab empat</p>
                </div>
                <div id="bab" class="bab-five">
                    <h4>Bab 5</h4>
                    <p>Ini bab lima</p>
                </div>
            </div>

        </div>
    );
}

export default babKimia