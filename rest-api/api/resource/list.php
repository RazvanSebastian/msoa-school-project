<?php 
header('Access-Control-Allow-Origin: *');  
include_once '../service/productservice.php';

$productService = new ProductService();
$list = $productService->findAll();
echo "$list";
?>
