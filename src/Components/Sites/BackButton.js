import React from "react";
import './BackButton.css';
import anime from "animejs";

export default class BackButton extends React.Component {
	componentDidMount() {
		

        anime({
            targets: '.backbutton_top',
            top: {
                value: ['10px', '10px'],
                duration: 600,
                delay: 800,
                easing: 'easeOutQuint'
            },
            rotate: {
                value: '45deg',
                duration: 800,
                 delay: 800,
                easing: 'easeOutQuart'
            },
        });

        anime({
            targets: '.backbutton_bottom',
            top: {
                value: ['10px', '10px'],
                duration: 600,
                delay: 800,
                easing: 'easeOutQuint'
            },
            rotate: {
                value: '135deg',
                duration: 800,
                delay: 800,
                easing: 'easeOutQuart'
            },
        });  
    
    }
          
	render() {
		return(
		<div className="backbutton_parent">
            <div className="backbutton_top"></div>
            <div className="backbutton_bottom"></div>
		</div>
		);
		}
	}
