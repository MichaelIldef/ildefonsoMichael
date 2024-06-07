<?php 
    $firstName = $_POST["FirstName"];
    $middleName = $_POST["MiddleName"];
    $lastName = $_POST["LastName"];
    $fullName = $lastName . ", " . $firstName . " " . $middleName;  

    echo "Full Name: $fullName";
    echo nl2br("\n\n"); // to add <br> tag


    $age = $_POST["age"];
    echo "Age: $age years old";
    echo nl2br("\n\n");


    $contact = $_POST["contact"];
    echo "Contact: $contact";
    echo nl2br("\n\n");

    $address = $_POST["address"];
    echo "Address: $address";
    echo nl2br("\n\n");


    $course = $_POST["course"];
    echo "Course: $course";
    echo nl2br("\n\n");


?>