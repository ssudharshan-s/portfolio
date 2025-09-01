import React from "react";
import './Contact1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faLocationDot,} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import img from '../Assets/img.jpg'

const Connect = () =>{
    return(
        <div className="contact" id="Contact-section">
            <div className="contact-container">
                <div className="avatar-glow">SS</div>
                <h2 className="name">SUDHARSHAN S</h2>
                <p className="title">Fullstack Developer</p>
                
                <div className="contact-group">
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+91 86672 93731</span>
                    </div>
                    <div className="contact-item">
                       <FontAwesomeIcon icon={faEnvelope} />
                        <span>s.shanfsd@gamil.com</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Tamilnadu, India</span>
                    </div>

                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/s-sudharshan-javadeveloper" target="-blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="../portfolio" target="-blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="../portfolio" target="-blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>

                <div className="qr-code">
                    <img src={img} alt="QRCode" />
                    <p>Scan to connect on WhatsApp</p>
                </div>
            </div>
        </div>
    );
};

export default Connect;