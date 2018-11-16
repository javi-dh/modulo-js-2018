<?php
	$dsn = 'mysql:host=localhost; dbname=movies_db; charset=utf8mb4';
	$user = 'root';
	$pass = ''; // change if neccesary

	try {
		$conn = new PDO($dsn, $user, $pass, []);
	} catch (\PDOException $e) {
		echo 'Error: ' . $e->getMessage();
	}
