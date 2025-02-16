<?php

$host = 'sql7.freesqldatabase.com';
$dbname = 'sql7763064';
$username = 'sql7763064';
$password = 'U18AiW6D8s';

try {
 
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}
?>