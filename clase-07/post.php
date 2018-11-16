<?php
	require_once('connection.php');

	$_POST = json_decode($_POST['data'], true); // Use this line if you use fetch()

	try {
		$stmt = $conn->prepare('
			INSERT INTO movies (title, rating, awards, release_date)
			VALUES (:title, :rating, :awards, :release_date)
		');

		$stmt->bindValue(':title', $_POST['title'], PDO::PARAM_STR);
		$stmt->bindValue(':rating', $_POST['rating'], PDO::PARAM_INT);
		$stmt->bindValue(':awards', $_POST['awards'], PDO::PARAM_INT);
		$stmt->bindValue(':release_date', $_POST['release_date'], PDO::PARAM_STR);

		$stmt->execute();
		$ok = 'Insertado';
	} catch (\PDOException $e) {
		$ok = 'Error: ' . $e->getMessage();
	}

	echo $ok;
