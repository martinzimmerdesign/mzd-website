$(document).ready(function() {
	setTimeout(function() {
// Springt nach Open, falls der Nutzer w�hrend des PreLoaders scrollt //
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
// Entfernt PreLoader, wenn alles geladen //
	$("#preloader").addClass("hide");
//Delay, damit die PreLoad Animation ausgef�hrt werden kann //
	}, 3000);
});