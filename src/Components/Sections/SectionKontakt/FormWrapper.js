import React from "react";
import "./Form.css";
import "./Kontakt.css";
import FormAbschnittEins from "./FormularAbschnitte/FormAbschnittEins.js";
import FormAbschnittZwei from "./FormularAbschnitte/FormAbschnittZwei.js";
import FormAbschnittDrei from "./FormularAbschnitte/FormAbschnittDrei.js";
import "./FormularAbschnitte/FormHandler.js";


export default class FormWrapper extends React.Component {
		
		render() {
			return(
			<div>
<form id="kontakt_form" action="#" method="POST">
      <h2>Kontaktformular</h2>

      <div class="line"></div>
      
      <div>
      <FormAbschnittEins />
      </div>
      
      <div>
      <FormAbschnittZwei />
      </div>
      
      <div>
      <FormAbschnittDrei />
      </div>

<div class="progress">
        <span class="progress_item done" id="pi1"></span>
        <span class="progress_item" id="pi2"></span>
        <span class="progress_item" id="pi3"></span>
</div>

        <div class="send_notefield">
        <p class="note_field_text"></p>
        </div>

    </form>
</div>
			);
			}
	}