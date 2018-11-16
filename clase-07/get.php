<?php
	require_once('connection.php');

	$stmt = $conn->prepare('SELECT * from movies ORDER BY title');
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

	$resultJSON = json_encode($result);

	echo $resultJSON;
