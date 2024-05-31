<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $telephone = $_POST['telephone'];
    $address = $_POST['address'];
    $parentsName = $_POST['parentsName'];
    $email = $_POST['email'];
    $branch = $_POST['branch'];
    $date = $_POST['date'];
    $title = $_POST['title'];
    $browser = $_POST['browser'];
    $comment = $_POST['comment'];

    // Construct the data string
    $data = "Username: $username\n";
    $data .= "Telephone: $telephone\n";
    $data .= "Address: $address\n";
    $data .= "Parents Name: $parentsName\n";
    $data .= "Email: $email\n";
    $data .= "Branch: $branch\n";
    $data .= "Date: $date\n";
    $data .= "Title: $title\n";
    $data .= "Browser: $browser\n";
    $data .= "Comment: $comment\n\n";
    file_put_contents('form_data.txt', $data, FILE_APPEND | LOCK_EX);
    header("Location: homepage.html");
    exit();
}
?>
