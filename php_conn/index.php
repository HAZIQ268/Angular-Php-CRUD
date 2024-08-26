<?php

header('Access-Control-Allow-Origin:*');
header( 'Access-Control-Allow-Method: GET,POST ,PUT ,DELETE ,OPTION ');
header( 'Access-Control-Allow-Headers: content-type,authorization');

$connection = mysqli_connect("localhost","root","","aptech");

$query = mysqli_query($connection, "select * from students");

while($row = mysqli_fetch_assoc($query)){
    $row['image'] = 'http://localhost:3000/Angular-Php-CRUD/php_conn/upload/' . $row['image'];
    $students[] = $row;
}

echo json_encode($students);


if($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $data = json_decode(file_get_contents("php://input"),true);
    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];
    $password = $data['password'];
    $image = $data['image'];

    

    $query = mysqli_query($connection,"update students set name = '$name' , email = '$email',password = '$password',image = '$image' where id = '$id'");
}


if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

    $data = json_decode(file_get_contents("php://input"), true);
    $id = $data['id'];


    $query = mysqli_query($connection, "delete from students where id = '$id'");
}




?>