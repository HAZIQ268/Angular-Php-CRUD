<?php

header('Access-Control-Allow-Origin:*');
header( 'Access-Control-Allow-Headers: content-type,authorization');

$connection = mysqli_connect("localhost","root","","aptech");

$query = mysqli_query($connection, "select * from students");

while($row = mysqli_fetch_assoc($query)){
    $students[] = $row;
}

echo json_encode($students);

$data = json_decode(file_get_contents("php://input"),true);

if($_SERVER["REQUEST_METHOD"] == "POST"){
   
    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];

    $query = mysqli_query($connection,"update students set name = '$name' , password = '$password',email = '$email' where id = '$id'");
}

?>