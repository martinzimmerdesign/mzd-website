import React from "react";
import "./Leistungen.css";
import webIcon from "./icons/webdesign_black.png";
import gfxIcon from "./icons/graphicdesign_black.png";
/* import appIcon from "./icons/appdesign_black.png"; */
import motionIcon from "./icons/motiondesign_black.png";
import arrowIcon from "./icons/arrow_black.png";
import $ from "jquery";
import Flickity from 'react-flickity-component';


const data = [

  {
    id: 0,
    html_id: "eins_leistung",
    title: 'Design', 
    subtitle: "Webdesign, Social Media & mehr",
    image: gfxIcon,
    paragraph: "Egal ob für den modernen Webauftritt, die Facebookseite oder für den eigenen Onlineshop. Gutes Design ist der Schlüssel zum Erfolg! Eine sinnvolle und intuitive Anordnung.."
  },
  {
    id: 1,
    html_id: "zwei_leistung",
    title: 'Development',
    subtitle: "Webseiten, Shops, Apps & mehr",
    image: webIcon,
    paragraph: "Ich entwerfe und designe persönliche, ansprechende 2D Logos, sowie diverse Social Media Designs für Influencer und Firmen bis zum kompletten Coorperate Design."
  },
  {
    id: 2,
    html_id: "drei_leistung",
    title: 'Animation',
    subtitle: '2D Animationen, Trailer & mehr',
    image: motionIcon,
    paragraph: "Ich entwerfe und programmiere geschickt gestaltete Apps und Spiele für Android. Dabei lege ich besonderen Wert auf die Benutzerfreundlichkeit."
  }
]



class List extends React.Component {
  render() {
    return (
        
        
      <React.Fragment>
        {this.props.itemsArray.map(item => (
          <LeistungenItem
            key={item.id}
            html_id={item.html_id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            paragraph={item.paragraph}
          />
        ))}
      </React.Fragment>



    );
  }
}

class LeistungenItem extends React.Component {
	constructor (){
    super();
    
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
    
  }
  
  handleClick() {
  	var hoehe = $(".leistung").height();
  $(".leistung").css('height', hoehe);
    this.setState(this.toggleClickState);
      
  }

  toggleClickState(state) {
    return {
      isClicked: !state.isClicked
    };
  }
	
    
	render() {
		return(
		
            
    <div key={this.props.key}>
        <div id={this.props.html_id} class="leistung">
  	<section className={ this.state.isClicked ? "leistung_icon_parent selected_i_p" : "leistung_icon_parent" } >
  	<img alt="icon" className={ this.state.isClicked ? "leistung_icon selected_i" : "leistung_icon" }  src={this.props.image}></img>
  	</section>
    <section class="leistung_head_part" onClick={this.handleClick}>
  	<h3 class="leistung_heading" >{this.props.title}</h3>
    <img alt="arrow_icon" className={ this.state.isClicked ? "leistung_arrow rotation_anim" : "leistung_arrow" } src={arrowIcon}></img>
    <h5>{this.props.subtitle}</h5>
    </section>
  <p className={ this.state.isClicked ? "leistung_paragraph" : "leistung_paragraph p_anim" }>{this.props.paragraph}</p>
  <button className={ this.state.isClicked ? "leistung_bsp_button" : "leistung_bsp_button b_anim" } name="data" type="button">Beispiele</button>
  </div>
    </div>

  );
		}
    
	}
	
export default class Leistungen extends React.Component {
    
	render() {

        
		return(

		<div id="leistungen_parent" class="section_parent">
		<div class="section_content_parent">
		  <div class="section_info_parent">
  <h2 class="section_title">Leistungen</h2>
  <p class="section_paragraph">Hier bekommen Sie einen Überblick und erste Informationen<br /> zu meinen verschiedenen Dienstleistungen.</p>
  </div>

            
		  <div class="leistungen_item_container">
                                <Flickity
      className={'carousel_leistungen'} // default ''
      elementType={'div'} // default 'div'
      options={{
              contain: true,
              freeScroll: true,
              cellAlign: "center",
              freeScrollFriction: 0.03,
              prevNextButtons: false,
              groupCells: true,
              pageDots: false,
              draggable: true,
            }}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >
<List itemsArray={data} />     
            
       </Flickity>     
    </div> 
    </div>
</div>
		)
		}
	}