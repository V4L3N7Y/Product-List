<?php
require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
 {
     $request = json_decode($postdata);


     $type = $request->type;
     $sku = $request->sku;
     $name = $request->name;
     $price = $request->price;
     $book = $request->book;
     $size = $request->size;
     $height = $request->height;
     $length = $request->length;
     $width = $request->width;


     //Store in database

if($type == 1) {
     $sql = "INSERT INTO products (d_sku,d_name,d_price,d_attribute)
     VALUES ('$sku','$name','$price','$book')";
}elseif($type == 2) {
     $sql = "INSERT INTO products (d_sku,d_name,d_price,d_attribute)
     VALUES ('$sku','$name','$price','$size')";
}elseif($type == 3)  {
  $sql = "INSERT INTO products (d_sku,d_name,d_price,d_attribute) 
     VALUES ('$sku','$name','$price','$height$width$length')";           /* it looks ugly , but it works.. */

}
     


     if ($con->query($sql) === TRUE) {
       echo "New record created successfully";
     } else {
       echo "Error: " . $sql . "<br>" . $con->error;
     }
 }