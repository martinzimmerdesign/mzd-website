import React from "react";
import "./LandingPage.css";
import anime from "animejs";
import arrowIcon from "./icons/arrow_white.png";


export default class LandingPage extends React.Component {
  
 
componentDidMount() {
    
    anime({
      targets: ".elements-animate-in",
      translateX: ["60px", "0px"],
      opacity: [0, 1],
      easing: "easeOutQuart",
      delay: anime.stagger(500, { easing: "easeOutQuad", start: 500 })
    });
    
    anime({
      targets: ".elements-animate-in_bottom",
      translateX: ["60px", "0px"],
      opacity: [0, 1],
      easing: "easeOutQuart",
      delay: anime.stagger(500, { easing: "easeOutQuad", start: 500 })
    });

  }  
    
  handleClick() {
    
  }
  
    
	render() {

        
        
		return(
		
		  <div class="landing_parent">
  <div class="landing_content">
  <h1 class="main_title elements-animate-in">Erfolgreiche Mediengestaltung</h1>
  <h1 class="main_title elements-animate-in">und Entwicklung.</h1>            
  <p class="header_paragraph elements-animate-in">Herzlich Willkommen auf Martin Zimmer Design. Hier finden Sie jegliche Dienstleistungen für ihren professionellen und erfolgreichen Auftritt in der digitalen Welt.</p>            
<button name="data" type="button" class="mehr elements-animate-in" onClick={this.handleClick}>Mehr erfahren</button>
  </div>
    <img alt="arrow" id="test" class="mehr_erfahren_arrow" src={arrowIcon} ref={ref => {
          anime({
            targets: '.mehr_erfahren_arrow',
            bottom: '30px',
            loop: true,
            duration: 2000,
            easing: "easeOutElastic"
          })
        }}></img>
        
    </div> 
		)
		}
	}