<?php
$host = "localhost";
$user = "root";      
$pass = "";    
$db   = "medzaki_db"; 

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}
?>
