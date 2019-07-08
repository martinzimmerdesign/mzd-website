<?php

    
	$from_add = "zimmer@schriftlage.de"; 
	$to_add = "martin2zimmer@gmail.com";
	
	$headers = "From: $from_add \r\n";
	$headers .= "Reply-To: $from_add \r\n";
	$headers .= "Return-Path: $from_add\r\n";
	$headers .= "X-Mailer: PHP \r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
  
	$name = $_POST['name'];
	$email = $_POST['email'];
	
	$web = $_POST['webdesign'];
	$logo = $_POST['logodesign'];
	$app = $_POST['appdesign'];
	$motion = $_POST['motiondesign'];
	
  $topic = "$web $logo $app $motion";
  
	$nachricht = $_POST['nachricht'];
	$datenschutz = $_POST['datenschutz'];
	
	$subject = "Kontaktformular - Nachricht";
	$message = "<p>Eine neue Nachricht gesendet über das Kontaktformular.<br><br>
  <b>Kontaktdaten des Schreibers:</b><br><br>
  <b>Name:</b> $name<br>
  <b>E-Mail Adresse:</b> $email<br><br>
  <b>Nachricht des Schreibers:</b><br><br>
  <b>Interesse an:</b> $topic<br><br>
  <b>Nachricht:</b> $nachricht</p>";
	
	if(mail($to_add,$subject,$message,$headers)) 
	{
    
	} 
	else 
	{
 	
	}

?>