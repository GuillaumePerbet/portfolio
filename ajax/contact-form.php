<?php

//POSTED VALUES_______________________________________________
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$society = htmlspecialchars($_POST['society']);
$phone = htmlspecialchars($_POST['phone']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

//VALIDATION__________________________________________________
$error = false;

//name
if (!preg_match("/^[a-zA-Z ]*$/",$name) && $name!="") {
    $error = true; 
}

//email
if (!filter_var($email, FILTER_VALIDATE_EMAIL) && $email!="") {
    $error = true;
}

//society

//phone

//message

//errors?
if($error){
    exit;
}

//SEND EMAIL__________________________________________________
//prepare content
$me = "perbet.dev@gmail.com";
$body = "
    Message de $name\r\n
    Société $society\r\n
    Téléphone $phone\r\n
    Email $email\r\n
    Message:\r\n
    $message
";

//prepare headers
$headers = "From: $me \r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "Return-Path: ".$email."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

// Send the email

$subject = "Enquiry from website";
mail($me, $subject, $body, $headers);