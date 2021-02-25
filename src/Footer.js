import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <p> &copy; 2021 Airbnb, Inc. All right reserved. demo clone website!</p>
                <p>Please go to the actual website for booking</p>
            </div>
            <div className="footer_icons">
                <FacebookIcon className="item"/>
                <TwitterIcon className="item"/>
                <InstagramIcon className="item"/>
            </div>
        </div>
    )
}

export default Footer
