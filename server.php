<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gaming_news";

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
  die("الاتصال فشل: " . $conn->connect_error);
}

$sql = "SELECT title, content FROM news";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<div><h3>" . $row["title"]. "</h3><p>" . $row["content"]. "</p></div>";
  }
} else {
  echo "0 نتائج";
}
$conn->close();
?>
