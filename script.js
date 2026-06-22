/*
  Générateur de mots de passe - version débutant.
  On évite la console : tout s'affiche directement sur la page.
*/

// ============================================================
// HELPER : fonction simple pour obtenir un nombre entier aléatoire
// Exemple : randomInt(0, 25) donne un nombre entre 0 et 25
// ============================================================
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ============================================================
// 1. On récupère les éléments HTML dont on a besoin
// ============================================================
let bouton = document.getElementById("bouton");
let copier = document.getElementById("copier");
let resultat = document.getElementById("resultat");
let slider = document.getElementById("slider");
let longueurAffichage = document.getElementById("longueurAffichage");
let message = document.getElementById("message");

// ============================================================
// 2. La fonction qui génère le mot de passe
// ============================================================
function genererMotDePasse() {
    // Notre "sac" de caractères (on utilise une chaîne de texte, plus simple qu'un tableau)
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

    // La longueur choisie par l'utilisateur
    let longueur = slider.value;

    // On part d'un mot de passe vide
    let motDePasse = "";

    // Boucle : on ajoute un caractère aléatoire à chaque tour
    for (let i = 0; i < longueur; i++) {
        let index = randomInt(0, caracteres.length - 1);
        motDePasse = motDePasse + caracteres[index];
    }

    // On affiche le résultat directement sur la page
    resultat.textContent = motDePasse;
    afficherMessage("Nouveau mot de passe généré !");
}

// ============================================================
// 3. Petite fonction pour afficher un message temporaire
// ============================================================
function afficherMessage(texte) {
    message.textContent = texte;
    setTimeout(function () {
        message.textContent = "";
    }, 2000);
}

// ============================================================
// 4. Événements : quand l'utilisateur interagit
// ============================================================

// Quand on bouge le slider, on met à jour le nombre affiché
slider.addEventListener("input", function () {
    longueurAffichage.textContent = slider.value;
});

// Quand on clique sur Générer
bouton.addEventListener("click", genererMotDePasse);

// Quand on clique sur Copier
copier.addEventListener("click", function () {
    navigator.clipboard.writeText(resultat.textContent).then(function () {
        afficherMessage("Mot de passe copié !");
    });
});

// ============================================================
// 5. On génère un premier mot de passe au chargement de la page
// ============================================================
genererMotDePasse();

/*
  DÉFIS BONUS (pour les élèves rapides) :
  - Ajouter une case à cocher pour inclure / exclure les symboles
  - Afficher "faible / moyen / fort" selon la longueur
  - Garder un historique des 5 derniers mots de passe
*/
