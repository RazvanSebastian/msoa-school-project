<?php 
include_once '../service/orderservice.php';
include_once '../service/userservice.php';
header('Access-Control-Allow-Origin: *');  

$email = (string)$_GET['email'];

$userservice = new UserService();
$orderservice = new OrderService();

$userid = $userservice->findUser($email);
echo $orderservice->findAll($userid);


?>