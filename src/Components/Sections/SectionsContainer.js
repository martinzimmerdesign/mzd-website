import React, { Component } from 'react';
import Footer from "./Footer/Footer.js";
import Navigation from "./Navigation/Navigation.js";
import Leistungen from "./SectionLeistungen/Leistungen.js";
import Landing from "./SectionLandingPage/LandingPage.js";
import Kontakt from "./SectionKontakt/Kontakt.js";
import Portfolio from "./SectionPortfolio/Portfolio.js";


class SectionsContainer extends Component {
  render() {
    return (
<div>

        <Navigation />
        <Landing />
        <Leistungen />
        <Portfolio />
        <Kontakt />
        <Footer />
</div>
    );
  }
}


export default SectionsContainer;
