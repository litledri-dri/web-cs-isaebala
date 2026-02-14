<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "db_bersih";

$koneksi = mysqli_connect("localhost", "root", "", "db_bersih");

if (mysqli_connect_errno()){
    echo "koneksi database gagal : " . mysqli_connect_errno();
}
?>