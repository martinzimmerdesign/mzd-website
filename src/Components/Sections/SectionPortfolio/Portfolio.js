import React from "react";
import "./Portfolio.css";
import testIcon from "./ImagesPortfolio/bevensen.png";
import rpk_hdr_thmb from "./ImagesPortfolio/repak_header_thumbnail.jpg";
import mzd_hdr_thmb from "./ImagesPortfolio/mzdesign_header_thumbnail.jpg";
import Flickity from 'react-flickity-component';
import { Link } from "react-router-dom";

const data = [

  {
    id: 0,
    html_id: "eins_portfolio",
    title: 'Header - therepak.com',
    thumbnail: rpk_hdr_thmb,
    link: "/repak-header",
  },
  {
    id: 0,
    html_id: "zwei_portfolio",
    title: 'Header - mzDesign',
    thumbnail: mzd_hdr_thmb,
    link: "/mzdesign-header",
  },
    {
    id: 0,
    html_id: "drei_portfolio",
    title: 'Webseite - Gefäßpraxis Bevensen',
    thumbnail: testIcon,
    link: "/test2",
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
            thumbnail={item.thumbnail}
            link={item.link}
          />
        ))}
      </React.Fragment>
    );
  }
}

class LeistungenItem extends React.Component {

	render() {
		return(

    <div key={this.props.key}>
            <Link to={this.props.link}>
     	<div id={this.props.html_id} class="portfolio_item">

  <img alt="portfolio_thumbnail" class="portfolio_item_thumbnail" src={this.props.thumbnail}></img>
    <section class="portfolio_item_text_section">
  	<h3 class="portfolio_item_title">{this.props.title}</h3>
  </section>
  </div>
        </Link>
    </div>

  );
		}
	}

export default class Portfolio extends React.Component {
	render() {
		return(


		<div id="portfolio_parent" class="section_parent">
		<div class="section_content_parent">

		  <div class="section_info_parent">
  <h2 class="section_title">Portfolio</h2>
  <p class="section_paragraph">Für <b>Fragen, Vorschläge oder Anregungen</b> bin ich immer offen, also schreiben Sie mir gerne unverbindlich eine Nachricht.</p>
  </div>

		  <div class="portfolio_item_container">
                                 <Flickity
      className={'carousel_portfolio'} // default ''
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
              watchCSS: false,
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
