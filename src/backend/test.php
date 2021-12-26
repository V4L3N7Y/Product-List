<?php
require 'connect.php';


$sql = "DELETE FROM `products`";

if(mysqli_query($con, $sql)){
    echo "Record deleted successfully";
  } else {
    echo "Error deleting record: " . $con->error;
  }
  
  $con->close();