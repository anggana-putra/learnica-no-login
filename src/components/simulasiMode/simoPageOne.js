import React from 'react'
import './simoOne.css'
import code from '../../assets/code.png';
import write from '../../assets/write.png';
import kimia from '../../assets/kimia.png';
import rocket from '../../assets/rocket.png';
import astronomi from '../../assets/astronomi.png'
import { Link } from 'react-router-dom';


function simoPageOne() {
    return(
        <div class="all-simoOne">
        <div class="top-part-simo">
            <Link to='/'>
            <svg className="back" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16 6.73483 15.8947 6.48052 15.7071 6.29302C15.5196 6.10552 15.2653 6.00018 15.0001 6.00018H3.41541L7.70893 1.70895C7.80189 1.616 7.87564 1.50564 7.92595 1.38418C7.97626 1.26272 8.00216 1.13255 8.00216 1.00108C8.00216 0.869618 7.97626 0.739441 7.92595 0.617984C7.87564 0.496527 7.80189 0.386168 7.70893 0.29321C7.61596 0.200251 7.5056 0.126512 7.38413 0.0762024C7.26266 0.0258932 7.13248 0 7.00101 0C6.86953 0 6.73935 0.0258932 6.61788 0.0762024C6.49642 0.126512 6.38605 0.200251 6.29308 0.29321L0.293755 6.29213C0.200639 6.385 0.126761 6.49533 0.0763536 6.6168C0.0259463 6.73827 0 6.86849 0 7C0 7.13151 0.0259463 7.26173 0.0763536 7.3832C0.126761 7.50467 0.200639 7.615 0.293755 7.70787L6.29308 13.7068C6.48084 13.8945 6.73548 14 7.00101 14C7.26653 14 7.52117 13.8945 7.70893 13.7068C7.89668 13.5191 8.00216 13.2644 8.00216 12.9989C8.00216 12.7334 7.89668 12.4788 7.70893 12.291L3.41541 7.99982H15.0001C15.2653 7.99982 15.5196 7.89448 15.7071 7.70698C15.8947 7.51948 16 7.26517 16 7Z" fill="#979797"/>
            </svg>
            </Link>
            <p id="simo-p-up-part">Simulation Mode</p>
        </div>
        <div class="middle-part-up-simo">
            <img className="rocket" src={rocket} alt="rocket"></img>
        </div>
        <div class="stem">
            <h3>STEM</h3>
            <div class="stem-wrap">
                <div class="code-stem">
                    <Link to="/stem-code">
                    <div className="gradient-code"></div>
                    <img id="code-img" src={code} alt="code"></img>
                    <h3>Komputer</h3>
                    </Link>
                </div>
                <div class="kimia-stem">
                    <Link to="/stem-kimia">
                    <div className="gradient-kimia"></div>
                    <img id="kimia-img" src={kimia} alt="code"></img>
                    <h3>Kimia</h3>
                    </Link>
                </div>
                <div class="astro-stem">
                    <Link to="/stem-astro">
                    <div className="gradient-astro"></div>
                    <img id="astro-img" src={astronomi} alt="code"></img>
                    <h3>Astronomi</h3>
                    </Link>
                </div>
                <div class="fisika-stem">
                    <Link to="/stem-fisika">
                    <div className="gradient-fisika"></div>
                    <img id="fisika-img" src={write} alt="code"></img>
                    <h3>Fisika</h3>
                    </Link>
                </div>
            </div>

        </div>
    </div>
    );
}

export default simoPageOne