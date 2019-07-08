import React from "react";
import "./Form.css";
import "./Kontakt.css";
import twitterIcon from "./icons/twitter_white.png";
import instagramIcon from "./icons/instagram_white.png";
import mailIcon from "./icons/mail_white.png";
import FormWrapper from "./FormWrapper.js";
import "./FormularAbschnitte/FormHandler.js";



export default class Kontakt extends React.Component {
		
		render() {
			return(
			
			  <div id="kontakt_parent" class="section_parent">

    <div class="section_info_parent">
        
      <h2 class="section_title">Kontakt</h2>
      <p class="section_paragraph">Für <b>Fragen, Vorschläge oder Anregungen</b> bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.
        <section class="social_media">
          <img alt="twitter_icon" class="social_media_icon" src={twitterIcon}></img>
          <img alt="instagram_icon" class="social_media_icon" src={instagramIcon}></img>
          <img alt="mail_icon" class="social_media_icon" src={mailIcon}></img>
        </section>
      </p>

    </div>

<FormWrapper />

</div>
			
			);
			}
	}