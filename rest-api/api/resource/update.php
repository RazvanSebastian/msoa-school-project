<?php 
	
	include_once '../service/productservice.php';
	header('Access-Control-Allow-Origin: *');  

	$jsonData = file_get_contents( 'php://input' );
	$product = json_decode($jsonData);

	$productService = new ProductService();
	$productService->update($product);
?>
