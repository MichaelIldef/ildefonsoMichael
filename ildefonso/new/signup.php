<?php
include "connection.php";
session_start();
$errorMsg ="";
if(isset($_POST["signupBtn"])){
    $name = $_POST["name"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $password2 = $_POST["password2"];
    
    $checkQuery = "SELECT username FROM customer WHERE username = '{$username}'";
    $checkQueryResult = $conn->query($checkQuery);
    if($checkQueryResult->num_rows > 0){
        $errorMsg = "Username already existed";
    }else{
        if($password == $password2){
            $signupQuery = "INSERT INTO customer (name, username, password)
            VALUES ('{$name}', '{$username}', '{$password}')";
            $signupQueryResult =  $conn->query($signupQuery);
            header("Location: login.php");
        }else{
            $errorMsg = "Password do not match";
        }
    }
    
}
if(isset($_POST["LoginBtn"])) {
    header("Location: login.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Signup</h1>
        <h5 style="color:red"><?php echo $errorMsg ?></h5>
        <form method="POST">
            <input type="text" name="name" placeholder="Enter Name" required>
            <br><br>
            <input type="text" name="username" placeholder="Enter Username" required>
            <br><br>
            <input type="password" name="password" placeholder="Enter Password" required>
            <br><br>
            <input type="password" name="password2" placeholder="Confirm Password" required>
            <br><br>
            <input type="submit" name="signupBtn" value="Signup">
        </form>
        <br><br><br>
        <form method="post">
        <label for="Login">already have an account?</label><br>
        <input type="submit" name="LoginBtn" value="Login">
    </form>
    </div>

</body>
</html>