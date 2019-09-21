import React from "react";
import webIcon from "./icons/webdesign_black.png";
import gfxIcon from "./icons/graphicdesign_black.png";
import appIcon from "./icons/appdesign_black.png";
import motionIcon from "./icons/motiondesign_black.png";
import { valPart2, getBack1 } from "./FormHandler.js";

export default class FormAbschnittZwei extends React.Component {


	render() {
		return(
		<div class="form_p2 hidden_part">

			<div class="label_wrapper">
	<label>An welcher Dienstleistung sind Sie interessiert?</label>
	<input type="name"
				 id="name"
				 name="name"
				 placeholder="z.B. Webdesign"
					>
	</input>
	</div>

<section className="buttons">
          <button onClick={getBack1}  name="data" type="button" class="back">Zurück</button>
          <button onClick={valPart2} name="data" type="button" class="weiter">Weiter </button>
        </section>

      </div>

		);
		}
	}
