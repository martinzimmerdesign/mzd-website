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
		
		        <ul class="topic">
          <p>Woran haben Sie Interesse?<span>Klicken Sie eine oder mehrere Kategorien an!</span>
</p>
          
          <input class="check" 
                 type="checkbox" 
                 id="topic1" 
                 name="webdesign" 
                 value="Web Design">
          </input>
<label for="topic1">
<div class="outer_checkbox">
<img alt="webdesign_icon" src={webIcon}></img>
</div>Web Design
</label>
          
          <input class="check"
                 type="checkbox"
                 id="topic2"
                 name="logodesign"
                 value="Graphik Design">
          </input>
<label for="topic2">
<div class="outer_checkbox">
<img alt="graphicdesign_icon" src={gfxIcon}>
</img>
</div>Grafik Design
</label>

         <input class="check"
                 type="checkbox"
                 id="topic3"
                 name="appdesign" 
                 value="App Design">
          </input>
<label for="topic3">
<div class="outer_checkbox">
<img alt="appdesign_icon" src={appIcon}>
</img>
</div>App Design
</label>
          
          <input class="check"
  type="checkbox" 
  id="topic4" 
  name="motiondesign" 
  value="Motion Design">
          </input>
<label for="topic4">
<div class="outer_checkbox"><img alt="motiondesign_icon" src={motionIcon}></img>
</div>Motion Design
</label>

</ul>

<section className="buttons">
          <button onClick={getBack1}  name="data" type="button" class="back">Zurück</button>
          <button onClick={valPart2} name="data" type="button" class="weiter">Weiter </button>
        </section>

      </div>
		
		);
		}
	}