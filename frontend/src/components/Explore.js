import React from 'react';
import "./Explore.css";
import { Link } from "react-router-dom";

function Explore() {
    return (
        <>
        <div id="parallax">
        <div className="container-fluid">
            <div className="subscribe">
                    <h1>Subscribe to get discount coupons & new offers!</h1>
                    <p className="subscribe-subtext">Earn 25% off the latest styles and trends if you join our email list. </p>
             <input className="subscribe-input" placeholder="Enter your email" type="email" name="email" id="email"/> <button className="subscribe-btn"> SUBSCRIBE  </button>
            </div>
        </div>
        </div>
            <p className="explore">More to Explore!</p>
        <div className="explore_content">
           
                <div className="card">
                        <a href="#cool" className="explore_links">
                        <img src="https://images.pexels.com/photos/822509/pexels-photo-822509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="styles" className="explore_img"/>
                        </a>

                        <div className="card_content">
                        
                        <a href="#cool" className="card_links">
                        <p className="card_title"><strong>UNDERGROUND</strong></p>
                        </a>

                        <p className="card_desc">Bringing together the best of skate culture and street fashion.</p>
                        </div>

                </div>

                <div className="card">
                        <a href="#cool" className="explore_links">
                        <img src="https://images.pexels.com/photos/457496/pexels-photo-457496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="styles" className="explore_img" />
                        </a>

                        <div className="card_content">
                        
                        <a href="#cool" className="card_links">
                        <p className="card_title"><strong>UNBOTHERED</strong></p>
                        </a>

                        <p className="card_desc">Bringing together the best of skate culture and street fashion.</p>
                        </div>

                </div>


                <div className="card">
                        <a href="#cool" className="explore_links">
                        <img src="https://images.pexels.com/photos/4929029/pexels-photo-4929029.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="styles" className="explore_img" />
                        </a>

                        <div className="card_content">

                        <a href="#cool" className="card_links">
                        <p className="card_title"><strong>EASY GOING</strong></p>
                        </a>

                        <p className="card_desc">Bringing together the best of skate culture and street fashion.</p>
                        </div>

                </div>
            
        </div>
        </>
    )
}

export default Explore