import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainSite from "../MainSite.js";
import Impressum from "./Impressum.js";
import Datenschutzerklärung from "./Datenschutzerklärung.js";
import PortfolioSiteRepakHeader from "./PortfolioSiteRepakHeader.js";
import PortfolioSiteTest1 from "./PortfolioSiteTest1.js";
import PortfolioSiteTest2 from "./PortfolioSiteTest2.js";
import PortfolioSiteTest3 from "./PortfolioSiteTest3.js";



export default class SiteContainer extends React.Component {
	componentDidMount() {}

	render() {
		return(
      <React.Fragment>
        <Router>
              <Switch>
  <Route exact path="/" component={MainSite}/>
  <Route path="/impressum" component={Impressum}/>
  <Route path="/datenschutzerklärung" component={Datenschutzerklärung}/>
  <Route path="/repak-header" component={PortfolioSiteRepakHeader}/>
  <Route path="/test1" component={PortfolioSiteTest1}/>
  <Route path="/test2" component={PortfolioSiteTest2}/>
  <Route path="/test3" component={PortfolioSiteTest3}/>
              </Switch>
        </Router>
      </React.Fragment>
		);
		}
	}
