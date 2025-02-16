<?php
include('connexion.php');

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $telephone = $_POST['telephone'];
    $adresse = $_POST['adresse'];
    $probleme = $_POST['probleme'];
    $description = $_POST['description'];

    //  requête d'insertion
    $sql = "INSERT INTO services (nom, telephone, adresse, probleme, description) 
            VALUES (:nom, :telephone, :adresse, :probleme, :description)";

    try {
       
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':telephone', $telephone);
        $stmt->bindParam(':adresse', $adresse);
        $stmt->bindParam(':probleme', $probleme);
        $stmt->bindParam(':description', $description);
        
        // Exécuter la requête
        $stmt->execute();
        
        echo "Nous avons bien reçu votre demande.";
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
}
?>
