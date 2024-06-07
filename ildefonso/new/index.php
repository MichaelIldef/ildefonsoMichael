<?php
include "connection.php";
session_start();
$name = "";
if(!isset($_SESSION["idSession"])){
  header("Location: login.php");
}

$customerId = $_SESSION["idSession"];
$retrieveQuery = "SELECT name FROM customer WHERE customerId = {$customerId}";
$retrieveQueryResult = $conn->query($retrieveQuery);
if($retrieveQueryResult->num_rows > 0){
  while($row = $retrieveQueryResult->fetch_assoc()){
    $name = $row["name"];
  }
}

if(isset($_POST["Submit"])){ 
    $name = $_POST["productName"];
    $price = $_POST["productPrice"];
    $insertQuery = "INSERT INTO cart (productName, productPrice, customerId)
                VALUES ('{$name}', '{$price}', '{$customerId}')";
                $insertQueryResult = $conn->query($insertQuery);

}

if(isset($_POST["logout"])){
  session_unset();
  session_destroy();  
  header("Location: login.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
    <h1>Shopping Cart</h1>
    <h2>Add product</h2>
    <form method="post">
        <label for="productName">Product Name:</label>
        <input type="text" name= "productName" required> 
        <br>
        <label for="productPrice">Product Price:</label>
        <input type="text" name= "productPrice" required>
        <br>
        <input type="submit" name="Submit" value="Add to Cart">
        
    </form>
    <br>
    <br>
    <br>
    <form method="post">
    <input type="submit" name="logout" value="Logout">
    </form>
    </div>

    
</body>
</html>