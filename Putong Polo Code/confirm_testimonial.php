<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $rating = $_POST['rating'];
  $message = $_POST['message'];

  // Database connection details
  $host = "localhost";
  $dbname = "putopyil_Testimonials_db";
  $username = "putopyil_Testimonials_admin";
  $password = "Testimonials_admin";

  $conn = new mysqli($host, $username, $password, $dbname);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $stmt = $conn->prepare("INSERT INTO testimonials (name, rating, message) VALUES (?, ?, ?)");
  $stmt->bind_param("sis", $name, $rating, $message);

  if ($stmt->execute()) {
    header("Location: testimonials.html");
    exit();
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();
}
?>
