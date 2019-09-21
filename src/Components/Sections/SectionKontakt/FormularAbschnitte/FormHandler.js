import $ from "jquery";
import anime from "animejs";


$(document).ready(function () {

    // Der JS Code muss eventuell ins PHP Dokument eingebaut werden //
    $('input[type=checkbox]').prop('checked', false);

}); // ready function

// Ueberprueft durch den Weiter-Button getriggert, ob einem des ersten Teiles valide sind //
export function valPart1() {

    $(".notification").remove();

    var name = $("#name").val();
    var email = $("#email").val();

    var check1 = false;
    var check2 = false;

    if (name.length < 1) {
        $('#name').after('<span class="notification">Bitte tragen Sie ihren Namen ein.</span>');
        shownote();
    } else {
        check1 = true;
        $('#name').after('<span class="notification">Eingabe bestätigt.</span>');
        shownote();
    }

    if (email.indexOf("@") === -1) {
        $('#email').after('<span class="notification">Bitte geben Sie eine E-Mail im gültigen Format an.</span>');
        shownote();
    } else {
        check2 = true;
        $('#email').after('<span class="notification">Eingabe bestätigt.</span>');
        shownote();
    }

    if (check1 === true && check2 === true) {
        getNext1();
    }

};

function shownote() {
        anime({
        targets: '.notification',
        opacity: [0, 1],
        translateX: ['-30px', '0px'],
        loop: false,
        duration: 500,
        easing: "easeInOutQuint",
    })
};
// Ueberprueft durch den Weiter-Button getriggert, ob einem des ersten Teiles valide sind //
export function valPart2() {

  $(".notification").remove();

  var topic = $("#topic").val();

  if (topic.length < 1) {
      $('#topic').after('<span class="notification">Bitte tragen Sie ein Thema ein.</span>');
      shownote();
  } else {
      getNext2();
  }

};

export function valPart3() {

    $(".notification").remove();

    var check3 = false;
    var check4 = false;
    var nachricht = $("#nachricht").val();
    var checkbox = $("#old_checkbox");


    if (nachricht.length < 1) {
        $('#nachricht').before('<span class="notification">Sie haben ihre Nachricht vergessen.</span>');
        shownote();
    } else {
        check3 = true;
    }


    if (checkbox.is(':checked')) {
        check4 = true;
    } else {
        $('.datenschutz_checkbox_wrapper').after('<span class="notification" style="top: 0vw;">Sie müssen die Datenschutzerklärung akzeptieren.</span>');
        shownote();

    }

    if (check3 === true && check4 === true) {
        console.log("3. Pruefung war erfolgreich");
        senden();

    };

};

// "Weiter"-Button fuehrt zum 2. Teil des Formulars //

export function getNext1() {
    $('.topic > p > span').css("display", "block");

    anime({
        targets: '.form_p1',
        opacity: [1, 0],
        loop: false,
        duration: 0,
        easing: "linear",
    })

    $(".form_p1").delay("0").hide("0");

    $(".form_p2").delay("0").show("0");


    anime({
        targets: '.form_p2',
        opacity: [0, 1],
        loop: false,
        translateX: ['50px', '0px'],
        duration: 800,
        delay: 0,
        easing: "easeInOutQuad",
    })

    $("#pi2").addClass("done"); // Zeigt Position im Form //
};



// "Weiter"-Button (2) fuehrt zum 3. Teil des Formulars //

export function getNext2() {

    anime({
        targets: '.form_p2',
        opacity: [1, 0],
        loop: false,
        duration: 0,
        easing: "linear",
    })

    $(".form_p2").delay("0").hide("0");

    $(".form_p3").delay("0").show("0");


    anime({
        targets: '.form_p3',
        opacity: [0, 1],
        loop: false,
        translateX: ['50px', '0px'],
        duration: 800,
        delay: 0,
        easing: "easeInOutQuad",
    })


    $("#pi3").addClass("done"); // Zeigt Position im Form //

};

// "Zurueck"-Button fuehrt zum 1. Teil des Formulars //
export function getBack1() {

    anime({
        targets: '.form_p2',
        opacity: [1, 0],
        loop: false,
        duration: 0,
        easing: "linear",
    })

    $(".form_p2").delay("0").hide("0");

    $(".form_p1").delay("0").show("0");


    anime({
        targets: '.form_p1',
        opacity: [0, 1],
        loop: false,
        translateX: ['50px', '0px'],
        duration: 800,
        delay: 0,
        easing: "easeInOutQuad",
    })

    $("#pi2").removeClass("done"); // Zeigt Position im Form //

};

// "Zurueck"-Button fuehrt zum 1. Teil des Formulars //
export function getBack2() {
    $('.topic > p > span').css("display", "block");

    anime({
        targets: '.form_p3',
        opacity: [1, 0],
        loop: false,
        duration: 0,
        easing: "linear",
    })

    $(".form_p3").delay("0").hide("0");

    $(".form_p2").delay("0").show("0");


    anime({
        targets: '.form_p2',
        opacity: [0, 1],
        loop: false,
        translateX: ['50px', '0px'],
        duration: 800,
        delay: 0,
        easing: "easeInOutQuad",
    })

    $("#pi3").removeClass("done"); // Zeigt Position im Form //
};

// Schliesst das Form und schreibt Erfolg / Fehlermeldung //

export function send_notification() {

    anime({
        targets: '.form_p3',
        opacity: [1, 0],
        loop: false,
        translateX: ['0px', '-50px'],
        duration: 800,
        delay: 0,
        easing: "easeInOutQuad",
    })

    $(".form_p3").delay("800").hide("0");

    $(".progress").delay("800").hide("0");

    $(".send_notefield").delay("800").show("0");

        anime({
        targets: '.send_notefield',
        opacity: [0, 1],
        loop: false,
        translateX: ['50px', '0px'],
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    })
};




export function senden() {
    console.log("Funktion senden wird getriggert");

    send_notification();

    if ($("#topic1").is(":checked")) {
        $("#topic1").val("Web Design,");
        console.log("W IST DA");
    } else if ($("#topic1").is(":not(:checked)")) {
        $("#topic1").val("");
        console.log("LEER");
    }

    if ($("#topic2").is(":checked")) {
        $("#topic2").val("Logo Design,");
        console.log("L IST DA");
    } else if ($("#topic2").is(":not(:checked)")) {
        $("#topic2").val("");
        console.log("LEER");
    }

    if ($("#topic3").is(":checked")) {
        $("#topic3").val("App Design,");
        console.log("A IST DA");
    } else if ($("#topic3").is(":not(:checked)")) {
        $("#topic3").val("");
        console.log("LEER");
    }

    if ($("#topic4").is(":checked")) {
        $("#topic4").val("Motion Design,");
        console.log("M IST DA");
    } else if ($("#topic4").is(":not(:checked)")) {
        $("#topic4").val("");
        console.log("LEER");
    }

    var v_name = $('#name').val();
    var v_email = $('#email').val();

    var v_webdesign = $('#topic1').val();
    var v_logodesign = $('#topic2').val();
    var v_appdesign = $('#topic3').val();
    var v_motiondesign = $('#topic4').val();

    var v_nachricht = $('#nachricht').val();
    var v_datenschutz = $('#old_checkbox').val();

    $.ajax({
        type: "POST", // Method type GET/POST
        url: "form.php", //Ajax Action url
        data: {
            name: v_name,
            email: v_email,
            webdesign: v_webdesign,
            logodesign: v_logodesign,
            appdesign: v_appdesign,
            motiondesign: v_motiondesign,
            nachricht: v_nachricht,
            datenschutz: v_datenschutz
        },

        // Before call ajax you can do activity like please wait message
        beforeSend: function (xhr) {
            console.log("Please wait...");
            $(".note_field_text").text("Bitte warten Sie einen Moment..");
        },

        //Will call if method not exists or any error inside php file
        error: function (qXHR, textStatus, errorThrow) {
            console.log("There are an error");
            $(".note_field_text").text("");
            $(".note_field_text").text("Es ist ein Fehler aufgetreten! Bitte verwenden Sie einen anderen Kontaktweg.");
        },

        success: function (data, textStatus, jqXHR) {
            console.log("Die Erfolg! Alle Daten wurden per Email versendet");
            $(".note_field_text").text("");
            $(".note_field_text").text("Vielen Dank für ihre Nachricht! Martin wird sich bald bei Ihnen melden.");
        }
    });

};
