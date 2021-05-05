import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__info">
                <h1 style={{color:"var(--primary-color",margin:"5px 0px"}}>PropKing</h1>
                <p>One Stop Solution for all your Property Requirements and Investor Opportunities which gives Highest ROI and Best-in-class Wealth Creation.</p>
            </div>
            <div className="footer__contact">
                
                    <h2>Contact Us</h2>
                <div className="footer__details" style={{textAlign:"center",lineHeight:"35px",marginBottom:"10px"}}>
                    <p>Toll Free <span style={{color:"#66a6ff"}}>1800 41 92312</span></p>
                    <p>Monday- Friday ( 9:00AM to 7:30PM)</p>
                    <h4 style={{fontWeight:"500"}}>Email: propking@gmail.com</h4>
                </div>
                    <h4>CONNECT WITH US</h4>
                <div className="footer__social"> 
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </div>

            </div>
            <div className="footer__contact">
                <h2>Address</h2>
                <p>Plot 177, Makuta's, Alkapur township, Manikonda, Hyderabad-500089</p>
                <h3 style={{margin:"10px  0px"}}>Quick Links</h3>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Property</Link>

            </div>
        </div>
    )
}

export default Footer
