<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Info Form</title>
    <link rel="stylesheet" href="ildefonso.css">
</head>
<body>
    <form action="info.php" method = "POST">
    <h1>Info Form</h1>
    <p>First Name</p>
    <input type="text" name = "FirstName" placeholder = "ex. Mark">
    <p>Middle Name</p>
    <input type="text" name = "MiddleName" placeholder = "ex. Santiago">
    <p>Last Name</p>
    <input type="text" name = "LastName" placeholder = "ex. Ildefonso">
    <p>Age</p>
    <input type="number" name = "age" placeholder = "1 - 120" min = "1" max = "120">
    <p>Contact</p>
    <input type="number" name = "contact" placeholder = "ex. 09443118654">
    <p>Address</p>
    <input type="text" name = "address" placeholder = "ex. Blk 1 lot 5 Kungsaan street, San juan, Taytay, Rizal">
    <p>Course</p>
    <input type="text" name = "course" placeholder = "ex. Computer Science">
    <br>
    <br>
    <br>
    <input type="submit" name="Submit">
    </form>


    
</body>
</html>