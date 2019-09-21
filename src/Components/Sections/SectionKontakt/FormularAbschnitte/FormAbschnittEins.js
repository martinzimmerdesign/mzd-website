import React from "react";
import { valPart1 } from "./FormHandler.js";


export default class FormAbschnittEins extends React.Component {


	render() {
		return(
		<div class="form_p1">

            <div class="label_wrapper">
        <label>Ihr Name:</label>
        <input type="name"
               id="name"
               name="name"
							 placeholder="Name"
                >
        </input>
        </div>

           <div class="label_wrapper">
        <label>Ihre E-Mail:</label>
        <input type="email"
               id="email"
               name="email"
							 placeholder="E-Mail"
               >
        </input>
        </div>

        <section className="buttons">
          <button name="data" type="button" onClick={valPart1} class="weiter">Weiter</button>
        </section>

      </div>

		);
		}
	}
