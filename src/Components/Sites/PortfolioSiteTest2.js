import React from "react";
import './Sites.css';
import './PortfolioSites.css';
import bevensen_case_study_mockup from "./PortfolioImages/d.png";
import anime from "animejs";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const data = {

title: "Gefässpraxis Bevensen",
subtitle: "Case Study",
overview: "Ein neuer Webauftritt, welcher den Nutzern schnell und einfach die gewünschten Informationen gibt, egal ob über den Computer oder das Smartphone. Die Seite sollte schnell und sein und durch eine intuitive und schlichte Gestaltung überzeugen.",
challenges: "Ein neuer Auftritt im Internet war eine Notwendigkeit, da die alte Webseite fehlerhaft war, worüber die Praxis durch einen Patienten informiert wurde. Funktionen funktionierten nicht und es fehlte eine 2019 gerechte Mobile/Tablet-Version. Nachdem die akuten Fehler behoben waren, wurde klar, dass ein neues Webdesign mit Programmierung nach neustem Standard der nächste logische Schritt sei. Primäres Ziel sollte sein, dass die Webseite intuitiv für die eher ältere Zielgruppe ist und diese möglichst schnell und einfach gesuchte Informationen finden. Zudem sollte die Seite schnell und fehlerfrei laufen. Auch die Einbindung in die Suchmaschinen stand im Fokus.",
weg_zum_ziel: "Eine intuitive Webseite ist an erster Stelle schlicht und einfach. Deshalb habe ich alle Informationen in logische Kategorien unterteilt, dennoch möglichst wenig, und daraus eine Navigationsstruktur erstellt. Die einzelnen Seiten sind dabei mit nur einem Klick, also schnellstmöglich, erreichbar und zeigen direkt alle wichtigen Informationen an. Die Webseite reduziert sich auf das Wichtigste, wodurch der Nutzer nie mit Informationen überladen wird. Das einheitliche Design der einzelnen Seiten und Animationen hilft dabei ein Gefühl für die Webseite zu bekommen. Die Programmierung mit React.JS mach dabei die Seite sehr schnell und das Unterteilen in Komponenten sorgt dafür, dass Inhalte nicht mehrfach neu geladen werden müssen, wodurch die Seite schnell und Ressourceneffizient ist. Dadurch bekommt der Nutzer eine optimale Erfahrung und verlässt nicht die Webseite aufgrund von langen Ladezeiten und zu großem Verbrauch von Datenvolumen.",
result: "Die Seite bringt (potentielle) Patienteninnen und Patienten schnellstmöglich an ihr Ziel und beantwortet Fragen nach angebotenen Leistungen, Öffnungszeiten und Kontaktdaten, sowie die Frage nach den Standorten ohne Aufwand. Dem Nutzer wird lästiges Suchen erspart und die positive Erfahrung färbt direkt auf das Bild der Praxis ab.",
image: bevensen_case_study_mockup,
}

export default class PortfolioSiteTest2 extends React.Component {
	componentDidMount() {


	}

	render() {
		return(
		<div className="site_container bevensen_case_study">

					<div className="site_start">
						<div className="position_wrapper">
							<h1>{data.title}</h1>
							<h3>{data.subtitle}</h3>
						</div>
					</div>
					<Fade bottom cascade>
					<div className="site_content_wrapper">
								<h3>Überblick:</h3>
								<p>{data.overview}</p>
				  </div>
								<div className="site_image_wrapper">
								<img className="site_image" alt="bevensen_case_study_mockup" src={data.image}></img>
								<h5 className="figure_subtitle">Startseite auf dem iPad Pro und dem iPhone X</h5>
								</div>



					<div className="site_content_wrapper">
								<h3>Ziele und Herausforderungen:</h3>
								<p>{data.challenges}</p>
				  </div>

					<div className="concept_wrapper concept_keywords">
						<h2>INTUITIV</h2>
						<h2>SCHNELL</h2>
						<h2>SCHLICHT</h2>
						<h5 className="figure_subtitle">Die drei Aspekte beim erstellen der Webseite</h5>
					</div>


					<div className="site_content_wrapper">
								<h3>Wie konnte das Ziel erreicht werden?</h3>
								<p>{data.weg_zum_ziel}</p>
				  </div>

					<div className="concept_wrapper">

						<div className="circle_wrapper">
							<div className="circle">
								<h2>99</h2>
							</div>
							<h2>Leistung</h2>
						</div>

						<div className="circle_wrapper">
							<div className="circle">
								<h2>96</h2>
							</div>
							<h2>Erreichbarkeit</h2>
						</div>

						<div className="circle_wrapper">
							<div className="circle">
								<h2>92</h2>
							</div>
							<h2>Techniken</h2>
						</div>

						<div className="circle_wrapper">
							<div className="circle">
								<h2>90</h2>
							</div>
							<h2>SEO</h2>
						</div>
	<h5 className="figure_subtitle">Quelle: Google Lighthouse Score (Desktop) vom 10.12.2019</h5>
					</div>
</Fade>
					<div className="site_content_wrapper">
										<h3>Das Ergebnis:</h3>
								<p>{data.result}</p>
				  </div>

	</div>

		);
		}
	}
