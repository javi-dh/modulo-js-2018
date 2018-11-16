<?php
	require_once('connection.php');

	try {
		$stmt = $conn->prepare("SELECT title FROM movies WHERE title LIKE :title");

		$stmt->bindValue(':title', '%'.$_POST['title'].'%', PDO::PARAM_STR);

		$stmt->execute();

		$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

		$resultJSON = json_encode($results);

		$ok = $resultJSON;
	} catch (\PDOException $e) {
		$ok = 'Error: ' . $e->getMessage();
	}

	echo $ok;
