<?php 
include_once '../service/usercartservice.php';
include_once '../service/userservice.php';

header('Access-Control-Allow-Origin: *');  

$userservice = new UserService();
$usercartservice = new UserCartService();

$jsonData = file_get_contents( 'php://input' );
$json = json_decode($jsonData);

$user = $json->user;  
$products = json_encode($json->products);
$price = $json->price;

$userid = $userservice->saveUser($user);
$usercartservice->saveOrder($products,$price,$userid);

?>