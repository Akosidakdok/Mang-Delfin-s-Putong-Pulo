<?php
$name = $_POST['name'];
$rating = $_POST['rating'];
$message = $_POST['message'];

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
  // Redirect back to Testimonials.html with success message
  echo "<script>
    alert('Thank you for your feedback!');
    window.location.href = 'Testimonials.html';
  </script>";
} else {
  echo "<script>
    alert('Error submitting testimonial. Please try again.');
    window.location.href = 'Testimonials.html';
  </script>";
}

$stmt->close();
$conn->close();
?>
