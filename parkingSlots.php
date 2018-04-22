<?php
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "carParking";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// selecting latest data
  $result = qry_select("slots", "*", $conn);

	echo json_encode($result);

  // function to select last/latest row values from database
	function qry_select($table_name , $select, $conn) {
  	$select_query = ($conn->query("SELECT $select FROM $table_name ORDER BY SrNo DESC LIMIT 1"))->fetch_assoc();
 		return $select_query;
	}

	mysqli_close($conn);
?>
