
<?php
include "connection.php";
session_start();
$errorMsg = "";

if(isset($_POST["loginBtn"])){
    $username = $_POST["username"];
    $password = $_POST["password"];
    $LoginQuery = "SELECT customerId FROM customer 
                WHERE username = '{$username}' AND password = '{$password}'";
    $loginQueryResult = $conn->query($LoginQuery);
    if($loginQueryResult->num_rows > 0){
        while($row = $loginQueryResult->fetch_assoc()){
            $_SESSION["idSession"] = $row["customerId"];
            header("Location: index.php");
        }
        
    }else{
        $errorMsg = "Incorrect username/password";
    }
}

if(isset($_POST["SignUp"])){
    header("Location: signup.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <h5 style="color:red"><?php echo $errorMsg ?></h5>
        <form method="POST">
            <input type="text" name="username" placeholder="Enter Username" required><br><br>
            <input type="password" name="password" placeholder="Enter Password" required><br>
            <input type="submit" name="loginBtn" value="Login">
        </form>
        <br><br><br><br>
        <form method="post">
            <input type="submit" name="SignUp" value="Create Account">
        </form>
    </div>
</body>
</html>