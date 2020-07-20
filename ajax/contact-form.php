<?php

var_dump($_POST);
// $message = str_replace("\n.", "\n..", $_POST['message']);

var_dump(mail('perbet.dev@gmail.com', $_POST['object'], $message,"From: ".$_POST['email']));