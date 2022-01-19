<?php
//database 
define('DB_HOST', 'http://192.168.1.234:8080');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_NAME', 'scandiweb');


//connect to database
function connect() {
    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($connect->connect_error) {
        die("Connection failed: " . $connect->connect_error);
      }else{
        echo"AAAAAAAAAAAAAAAAA";
      }
      

    return $connect;
}

$con = connect();