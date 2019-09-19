import React from "react";
import "./Leistungen.css";
import webIcon from "./icons/webdesign_black.png";
import gfxIcon from "./icons/graphicdesign_black.png";
/* import appIcon from "./icons/appdesign_black.png"; */
import motionIcon from "./icons/motiondesign_black.png";
import arrowIcon from "./icons/arrow_black.png";
import wartungIcon from "./icons/wartung.png";
import uiIcon from "./icons/uidesign.png";
import $ from "jquery";
import Flickity from 'react-flickity-component';
import MediaQuery from 'react-responsive';

const data = [

  {
    id: 0,
    html_id: "eins_leistung",
    title: 'Webdesign',
    subtitle: "Responsive, Smart, Effizient",
    image: gfxIcon,
    paragraph: "Ein modernes Webdesign spricht den Nutzer an und vermittelt die gewünschte Nachricht. Der Erfolg hängt von der richtigen Nutzererfahrung und einem intuitiven Design ab."
  },
  {
    id: 1,
    html_id: "zwei_leistung",
    title: 'Webentwicklung',
    subtitle: "Webseiten & eCommerce Systeme",
    image: webIcon,
    paragraph: "Ein modernes Design braucht eine zeitgemäße technische Umsetzung. Neuste Standards der Programmierung und die Betrachtung aller Gerätegrößen spielen eine sehr wichtige Rolle."
  },
  {
    id: 2,
    html_id: "vier_leistung",
    title: 'Wartung & Verwaltung',
    subtitle: 'Updates, Optimierung & mehr',
    image: wartungIcon,
    paragraph: "Ein erfolgreicher Webauftritt ist ein Prozess, welcher Aktualisierung, Optimierung und Wartung nach der Veröffentlichung voraussetzt."
  },
  {
    id: 3,
    html_id: "drei_leistung",
    title: 'UX/UI Design',
    subtitle: 'Formulare, Interfaces, Menüs',
    image: uiIcon,
    paragraph: "Erfolgreiche Menüs und Oberflächen stellen den Nutzer in den Mittelpunkt und leiten ihn geschickt und einfach durch jeden Prozess. Probleme werden gelöst und der Nutzer bereichert. "
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
    </section>
  <p className={ this.state.isClicked ? "leistung_paragraph" : "leistung_paragraph p_anim" }>{this.props.paragraph}</p>
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
  <p class="section_paragraph">Hier finden Sie jegliche Dienstleistungen für ihren professionellen und erfolgreichen Auftritt in der digitalen Welt.</p>
  </div>


		  <div class="leistungen_item_container">

          <MediaQuery maxDeviceWidth={1300}>
            <Flickity
className={'carousel_leistungen'} // default ''
elementType={'div'} // default 'div'
options={{
contain: true,
freeScroll: false,
cellAlign: "center",
freeScrollFriction: 0.03,
prevNextButtons: false,
groupCells: true,
pageDots: false,
draggable: true,
watchCSS: false,
}}
disableImagesLoaded={false} // default false
reloadOnUpdate // default false
>
<List itemsArray={data} />
</Flickity>
        </MediaQuery>

        <MediaQuery minDeviceWidth={1300}>
          <List itemsArray={data} />
                  </MediaQuery>

    </div>
    </div>


</div>
		)
		}
	}
