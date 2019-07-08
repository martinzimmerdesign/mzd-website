import React from "react";
import "./Footer.css";
import arrowIcon from "./icons/arrow_white.png";
import twitterIcon from "./icons/twitter_white.png";
import instagramIcon from "./icons/instagram_white.png";
import mailIcon from "./icons/mail_white.png";
import { Link } from "react-router-dom";
      
export default class Footer extends React.Component {
	componentDidMount() {}
		
	render() {
		return(
		<div class="footer_parent">
		<div class="footer_button_parent">
		<p>Zurück nach Oben</p>
		<img className="to_top_button" src={arrowIcon} alt="to_the_top"></img>
		</div>
		<div className="footer_line"></div>
		<div className="footer_header_content">
<h3 className="footer_heading">Martin Zimmer Design</h3>
<p className="footer_slogan">Erfolgreiche Mediengestaltung und Entwicklung.</p>
<div className="footer_social">
          <img src={twitterIcon}  alt="twitter_icon"></img>
          <img src={instagramIcon}  alt="instagram_icon"></img>
          <img src={mailIcon}  alt="mail_icon"></img>
</div>
</div>
<div className="footer_line"></div>
<div className="footer_info">
          
<li><Link to="/impressum">Impressum</Link></li>
<li><Link to="/datenschutzerklärung">Datenschutzerklärung</Link></li>
        
<p>Copyright © 2019 <b>mzDesign</b></p>
        </div>          
            
		</div>
		);
		}
	}