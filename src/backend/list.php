<?php

require 'connect.php';
error_reporting(E_ERROR);
$products = [];
$sql = "SELECT * FROM products";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
{
    $products[$cr]['d_sku'] = $row['d_sku'];
    $products[$cr]['d_name'] = $row['d_name'];
    $products[$cr]['d_price'] = $row['d_price'];
    $products[$cr]['d_attribute'] = $row['d_attribute'];
    $cr++;

}

//print_r ($products);

echo json_encode($products);
}
else
{
    http_response_code(404);
}

?>