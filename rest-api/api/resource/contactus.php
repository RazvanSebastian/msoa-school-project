<?php 
	include_once '../service/contactservice.php';
	header('Access-Control-Allow-Origin: *');  

	$jsonData = file_get_contents( 'php://input' );
	$contact = json_decode($jsonData);
	echo "$jsonData";

	$contactservice = new ContactService();
	$contactservice->save($contact);
?>