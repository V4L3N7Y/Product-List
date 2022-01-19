<?php

require 'connect.php';
$id = $_GET['id'];
 
$sql = "DELETE FROM `products` WHERE `d_sku` = '{$id}'";

if(mysqli_query($con, $sql)){
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $con->error;
}

$con->close();