import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div id="footer">         
                    <div className="footer_col">

                    <Link to="#" className="footer_links">
                    <h2>Cool Zone</h2>
                    </Link>

                        <p className="text-left">Bringing together the best of skate culture and street fashion.</p>
                    </div>

                    <div className="footer_col">
                        
                        <h3>Features</h3>

                        <a href="#cool" className="footer_links">
                        <p>Skaters</p>
                        </a>

                        <a href="#cool" className="footer_links">
                        <p>Street Fashion</p>
                        </a>

                        <a href="#cool" className="footer_links">
                        <p>Cool Stuffs</p>
                        </a>

                    </div>

                    <div className="footer_col">

                        <h3>Quick Contact</h3>
                    
                        <Link to="#" className="footer_links">
                        <p>+1 987 654 321</p>
                        </Link>

                        <Link to="#" className="footer_links">
                        <p>contact@coolzone.com</p>
                        </Link>

                    </div>

                    <div className="footer_col">

                        <h3>Follow Us </h3>

                        <Link to="#" className="footer_links">
                        <p>Facebook</p>
                        </Link>

                        <Link to="#" className="footer_links">
                        <p>Youtube</p>
                        </Link>

                        <Link to="#" className="footer_links">
                        <p>Linkedin</p>
                        </Link>

                        <Link to="#" className="footer_links">
                        <p>Twitter</p>
                        </Link>

                    </div>
        </div>
    )
}

export default Footer