import React from "react";
import { valPart3, getBack2 } from "./FormHandler.js";
import { Link } from "react-router-dom";

export default class FormAbschnittDrei extends React.Component {

		
	render() {
		return(
		<div class="form_p3 hidden_part">
		
        <label>Ihre Nachricht:</label>
        <textarea type="nachricht"
                  rows="5"
                  id="nachricht"
                  name="nachricht"
></textarea>

            <div class="datenschutz_checkbox_wrapper">
        <input type="checkbox"
               id="old_checkbox"
               
               name="datenschutz">
        </input>
        <label for="old_checkbox" class="label_agb_cb">
<span class="new_checkbox"></span>Hiermit bestätige ich die <li><Link to="/datenschutzerklärung">Datenschutzerklärung</Link></li>&nbsp;gelesen zu haben und akzeptiere diese im vollen Unfang!
</label>
            </div>

        <section className="buttons">
          <button onClick={getBack2} name="data" type="button" class="back">Zurück</button>
          <button onClick={valPart3} type="button" class="send_button" name="data" value="Abschicken" id="submit_button">Senden</button>
        </section>

      </div>
		
		);
		}
	}