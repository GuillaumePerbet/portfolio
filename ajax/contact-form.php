<?php

$response = [];

//message
if (isset($_POST['message']) && !empty($_POST['message'])){
    $message = htmlspecialchars($_POST['message']);
}else{
    $response['messageError'] = true; 
}

//email
if (isset($_POST['email']) && !empty($_POST['email']) && preg_match("#^[\w\-\.\+]{1,64}@([\w\-]+\.)+[a-z]{2,}$#i",$_POST['email'])!=0){
    $email = htmlspecialchars($_POST['email']);
}else{
    $response['emailError'] = true; 
}

//name
if (isset($_POST['name'])){
    $name = htmlspecialchars($_POST['name']);
}else{
    $response['nameError'] = true; 
}

//society
if (isset($_POST['society'])){
    $society = htmlspecialchars($_POST['society']);
}else{
    $response['societyError'] = true; 
}

//phone
if (isset($_POST['phone'])){
    $phone = htmlspecialchars($_POST['phone']);
}else{
    $response['phoneError'] = true; 
}

//phone
if (isset($_POST['subject'])){
    $subject = htmlspecialchars($_POST['subject']);
}else{
    $response['subjectError'] = true; 
}

//errors?
if($response){
    echo json_encode($response);
    exit;
}

//SEND EMAIL__________________________________________________
//prepare content
$me = "perbet.dev@gmail.com";
$object = "Contact Portfolio";
$body = "
    Message de $name\r\n
    Société : $society\r\n
    Téléphone : $phone\r\n
    Email : $email\r\n
    Sujet : $subject\r\n
    Message\r\n
    $message
";

//prepare headers
$headers = "From: $me \r\n";
$headers .= "Reply-To: ".$email."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

// Send the email
$response["send"] = mail($me, $object, $body, $headers);
echo json_encode($response);