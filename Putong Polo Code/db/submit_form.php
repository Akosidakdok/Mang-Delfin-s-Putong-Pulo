<?php
// Get POST data
$name = $_POST['name'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$message = $_POST['message'];

// Database config
$host = "localhost";
$dbname = "putopyil_contacts_db"; // change this
$username = "putopyil_contacts_admin"; // change this
$password = "contacts_admin"; // change this

// Create DB connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare statement
$stmt = $conn->prepare("INSERT INTO contact_form (name, contact, email, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $contact, $email, $message);

// Execute
if ($stmt->execute()) {
  echo "Success! Your message has been received.";
} else {
  echo "Error: " . $stmt->error;
}

// Close
$stmt->close();
$conn->close();
?>
