import React from "react";
import "./Navigation.css";
import anime from "animejs";



class NavLinks extends React.Component {

  render() {
  	return(
  <ul class="list">
      <li class="navigation_text hoverable">
        <a href="nachher_ersetzen.html">Startseite</a></li>
      <li class="navigation_text hoverable">
        <a href="nachher_ersetzen.html">Leistungen</a></li>
      <li class="navigation_text hoverable">
        <a href="nachher_ersetzen.html">Portfolio</a></li>
      <li class="navigation_text hoverable">
        <a href="nachher_ersetzen.html">Kontakt</a></li>
        <div class="nav_line"></div>
        <li class="navigation_text secondary hoverable ">
        <a href="nachher_ersetzen.html">Impressum</a></li>
      <li class="navigation_text secondary hoverable">
        <a href="nachher_ersetzen.html">Datenschutzerklärung</a></li>
        <li class="navigation_text secondary">
        <a href="nachher_ersetzen.html">Copyright © 2019 mzDesign</a></li>
    </ul>
  );
  }
    
	}


export default class Navigation extends React.Component {
	constructor (props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isMenuClicked: false
    };
    
  }

componentDidMount() {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
    
      } else {
    
      }
    };
  }
  
  componentWillUnmount() {
    window.onscroll = null;
  }


handleClick() {
    
      if (this.state.isMenuClicked === false) {
    anime({
        targets: '.outer_extension',
        translateY: ['100%', '0'],
        loop: false,
        duration: 600,
        delay: 0,
        easing: "easeOutQuart",
    })

    anime({
        targets: '.navigation_text',
        opacity: ['0', '1'],
        translateX: ['90px', '0px'],
        loop: false,
        duration: 400,
        delay: anime.stagger(100),
        easing: "easeInCirc",
    })

    anime({
        targets: '.top',
        top: {
            value: ['0px', '10px'],
            duration: 600,
            easing: 'easeOutQuart'
        },
        rotate: {
            value: '45deg',
            duration: 800,
            delay: 600,
            easing: 'easeInOutQuint'
        },
        delay: 0
    });

    anime({
        targets: '.bottom',
        top: {
            value: ['20px', '10px'],
            duration: 600,
            easing: 'easeOutQuart'
        },
        rotate: {
            value: '135deg',
            duration: 800,
            delay: 600,
            easing: 'easeInOutQuint'
        },
        delay: 0
    });

    anime({
        targets: '.middle',
        opacity: ['1', '0'],
        duration: 100,
        delay: 600,
        easing: "linear",
    })

    }
    else {

        anime({
            targets: '.top',
            top: {
                value: ['10px', '0px'],
                duration: 600,
                delay: 800,
                easing: 'easeOutQuint'
            },
            rotate: {
                value: '0deg',
                duration: 800,
                easing: 'easeOutQuart'
            },
            delay: 0
        });

        anime({
            targets: '.bottom',
            top: {
                value: ['10px', '20px'],
                duration: 600,
                delay: 800,
                easing: 'easeOutQuint'
            },
            rotate: {
                value: '0deg',
                duration: 800,
                easing: 'easeOutQuart'
            },
            delay: 0
        });

        anime({
            targets: '.middle',
            opacity: ['0', '1'],
            duration: 100,
            delay: 600,
            easing: "linear",
        })

    }
    
this.setState(this.toggleClickState);
  }

  toggleClickState(state) {
    return {
      isMenuClicked: !state.isMenuClicked
    };
  }

	render() {
		return(
		<div id="nav_section">
		<div className={ this.state.isMenuClicked ? "outer outer_change" : "outer" } >
      <p class="name"><b>Martin Zimmer</b> Design</p>
      <div className={ this.state.isMenuClicked ? "hamburger_icon hamburger_icon_change" : "hamburger_icon" } onClick={this.handleClick}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </div>
    <div class="outer_extension" style={{ display: this.state.isMenuClicked ? "block" : "none" }}>
      <NavLinks />
      
    </div>
    
    </div>
		)
		}
	}