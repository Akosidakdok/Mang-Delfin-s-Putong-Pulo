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

// Execute and show confirmation
if ($stmt->execute()) {
  echo "<script>
    alert('Thank you for reaching out! We will get back to you soon.');
    window.location.href = 'Contact.html';
  </script>";
} else {
  echo "<script>
    alert('There was an error submitting your message. Please try again later.');
    window.location.href = 'Contact.html';
  </script>";
}

// Close
$stmt->close();
$conn->close();
?>
