import React from "react";
import "./Portfolio.css";
import testIcon from "./ImagesPortfolio/testimg1.png";
import rpk_hdr_thmb from "./ImagesPortfolio/repak_header_thumbnail.jpg";
import mzd_hdr_thmb from "./ImagesPortfolio/mzdesign_header_thumbnail.jpg";
import Flickity from 'react-flickity-component';
import { Link } from "react-router-dom";

const data = [

  {
    id: 0,
    html_id: "eins_portfolio",
    title: 'Header Design - therepak.com', 
    categorie: "Grafik Design",
    thumbnail: rpk_hdr_thmb,
    link: "/repak-header",
  },
  {
    id: 0,
    html_id: "zwei_portfolio",
    title: 'Header Design - mzDesign', 
    categorie: "Grafik Design",
    thumbnail: mzd_hdr_thmb,
    link: "/mzdesign-header",  
  },
    {
    id: 0,
    html_id: "drei_portfolio",
    title: 'Test2', 
    categorie: "Web Design",
    thumbnail: testIcon,
    link: "/test2",    
  },
    {
    id: 0,
    html_id: "last_portfolio",
    title: 'Test3', 
    categorie: "Web Design",
    thumbnail: testIcon,
    link: "/test3",    
  },

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
            categorie={item.categorie}
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
            
  	<section class="portfolio_item_text_section">
  	<h3 class="portfolio_item_title">{this.props.title}</h3>
  	<span class="portfolio_item_categorie">{this.props.categorie}</span>
  </section>
  <img alt="portfolio_thumbnail" class="portfolio_item_thumbnail" src={this.props.thumbnail}></img>
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
  <p class="section_paragraph">Hier bekommen Sie einen Eindruck über den Style und die Entstehung meiner Arbeit.</p>
  </div>

		  <div class="portfolio_item_container">
                                 <Flickity
      className={'carousel_portfolio'} // default ''
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
              watchCSS: true,
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