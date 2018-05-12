<?php 
	include_once '../service/productservice.php';
	header('Access-Control-Allow-Origin: *');  

	$id = $_GET["id"];
	$productService = new ProductService();

	$productService->delete($id);
?>