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
{/*
<h1>Interesse?</h1>
<p class="footer_paragraph">Ich bin immer offen für spannende Projekte und coole Ideen!</p>

<button class="kontakt_button">Kontakt aufnehmen</button>

<p class="footer_paragraph email">oder: <a>m.zimmer.business@gmail.com</a></p>
*/}
<div class="links">
<li><Link to="/impressum">Impressum</Link></li>
<li><Link to="/datenschutzerklärung">Datenschutzerklärung</Link></li>
</div>

<p class="copyright">Copyright © 2019 <b>Martin Zimmer Design</b></p>

		</div>
		);
		}
	}
