document.getElementById("serviceForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des champs
    const nom = document.getElementById("nom").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const description = document.getElementById("description").value.trim();

    // Validation du nom (seulement lettres et espaces, y compris avec accents)
    const nomRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nomRegex.test(nom)) {
        alert("Le nom ne doit contenir que des lettres et des espaces.");
        return;
    }

    // Validation du téléphone (peut commencer par + mais pas obligatoire, au moins 11 chiffres)
    const telephoneRegex = /^\+?\d{11,}$/;
    if (!telephoneRegex.test(telephone)) {
        alert("Veuillez entrer un numéro de téléphone valide .");
        return;
    }

    // Validation de la description (ne doit pas être vide)
    if (description === "") {
        alert("Veuillez décrire votre problème.");
        return;
    }

    // Si tout est valide, on peut envoyer le formulaire
    alert("Formulaire envoyé avec succès !");
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    if (header) {
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }

    // Détection de l'appareil et ajustement de l'affichage
    function ajusterAffichage() {
        if (window.innerWidth <= 768) {
            document.body.classList.add("mobile");
            document.body.classList.remove("desktop");
        } else {
            document.body.classList.add("desktop");
            document.body.classList.remove("mobile");
        }
    }

    window.addEventListener("resize", ajusterAffichage);
    ajusterAffichage(); // Appel initial
});
