<?php 
session_start();
$errorMsg = "";
if (isset($_POST["loginBtn"])) {
    if ($_POST["username"] == "admin" && $_POST["pass"] == "admin"){ 
        $_SESSION["usernameSession"] = $_POST["username"];
        header("Location: header.php");
    } else {
        $errorMsg = "Incorrect Username/Password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="Post">
        <h2>LOGIN</h2>
        <h3> <? 
         echo "$errorMsg";   
        ?>
        </h3>
        
        <input type="text" name="username" id="username" placeholder = "Username">
        <br><br>
        <input type="password" name="pass" id="pass" placeholder = "Password">
        <br><br>
        <input type="submit" value="Login" name="loginBtn" id="loginBtn">
    </form>
   

    
</body>
</html>