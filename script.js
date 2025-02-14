document.getElementById("serviceForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des champs
    const nom = document.getElementById("nom").value;
    const telephone = document.getElementById("telephone").value;
    const description = document.getElementById("description").value;

    // Validation du nom (pas de chiffres ni de caractères spéciaux)
    const nomRegex = /^[a-zA-Z\s]+$/;
    if (!nomRegex.test(nom)) {
        alert("Le nom ne doit contenir que des lettres et des espaces.");
        return;
    }

    // Validation du téléphone uniquement des chiffres
    const telephoneRegex = /^\d+$/;
    if (!telephoneRegex.test(telephone)) {
        alert("Vérifier votre numéros");
        return;
    }

    // Validation de la description ne doit pas être vide
    if (description.trim() === "") {
        alert("Veuillez décrire votre problème");
        return;
    }

    // Si tout est valide, on peut envoyer le formulaire
    alert("Formulaire envoyé avec succès !");
  
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
});
