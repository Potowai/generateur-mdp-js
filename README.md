# 🔐 Générateur de Mots de Passe - TP JavaScript

Projet pédagogique pour apprendre les bases de JavaScript aux élèves de 14 ans.

## 🎯 Objectif

Créer un générateur de mots de passe fonctionnel, étape par étape, sans console : **tout le résultat s'affiche en temps réel sur la page web**.

## 👥 Pour qui ?

- Âge : 14 ans
- Niveau : débutant complet
- Plateforme : VS Code (ou n'importe quel éditeur de texte) + un navigateur
- Aucune installation complexe : c'est juste 3 fichiers (HTML, CSS, JS)

## 🚀 Comment utiliser ce projet

### Option 1 : Double-clic (le plus simple)

1. Ouvre le dossier `generateur-mdp-js`
2. Double-clique sur `index.html`
3. Ça s'ouvre dans ton navigateur

### Option 2 : Avec VS Code

1. Ouvre le dossier dans VS Code
2. Installe l'extension **"Live Server"** (une seule fois)
3. Clic droit sur `index.html` → **Open with Live Server**

### Option 3 : Déployer sur Netlify Drop

1. Glisse-dépose le dossier complet sur [Netlify Drop](https://app.netlify.com/drop)
2. Le site est en ligne en quelques secondes

## 📁 Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page (titre, boutons, zone de résultat) |
| `style.css` | Apparence visuelle (couleurs, mise en page) |
| `script.js` | La logique JavaScript (génération du mot de passe) |

## 📚 Déroulement par itérations

### Itération 1 : Découvrir la page

**Consigne :** Ouvre `index.html` dans ton navigateur. Que vois-tu ? Change le texte `<h1>` dans `index.html` et actualise la page.

**Concepts :**
- Une page web est faite de balises HTML (`<h1>`, `<div>`, `<button>`)
- On peut modifier le HTML et voir le résultat immédiatement

---

### Itération 2 : Première variable

**Consigne :** Dans `script.js`, ajoute en haut :

```js
let nomDuSite = "Netflix";
```

Dans la fonction `genererMotDePasse()`, juste avant `resultat.textContent = motDePasse;`, ajoute :

```js
motDePasse = "Mot de passe pour " + nomDuSite + " : " + motDePasse;
```

Actualise la page et clique sur Générer. Que se passe-t-il ?

**Concepts :**
- Une variable est une boîte avec un nom (`let nomDuSite`)
- Le signe `=` veut dire "mettre dans la boîte"
- On peut coller du texte avec `+`

---

### Itération 3 : Les tableaux

**Consigne :** Dans `script.js`, crée un tableau de lettres :

```js
let lettres = ["a", "b", "c", "d", "e"];
resultat.textContent = lettres[0]; // affiche la première lettre
```

Essaye `lettres[1]`, `lettres[2]`, `lettres.length`.

**Concepts :**
- Un tableau = une liste ordonnée
- Le premier élément est à l'index `0`
- `.length` donne le nombre d'éléments

---

### Itération 4 : La boucle `for`

**Consigne :** Dans la console du navigateur (F12 → Console), essaie :

```js
for (let i = 0; i < 5; i++) {
    console.log("Bonjour !");
}
```

Puis, dans `script.js`, remplace la ligne `resultat.textContent = motDePasse;` par une boucle qui affiche toutes les lettres du tableau `lettres` dans `resultat`.

**Concepts :**
- Une boucle répète des instructions
- `i++` veut dire "augmenter i de 1"

---

### Itération 5 : Nombre aléatoire simplifié

**Consigne :** Dans `script.js`, on a déjà une fonction magique :

```js
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

Teste dans la console :

```js
randomInt(0, 9);
randomInt(1, 6); // comme un dé
```

**Concepts :**
- Une fonction reçoit des valeurs (`min`, `max`) et renvoie un résultat
- `randomInt(0, 9)` est beaucoup plus simple que `Math.floor(Math.random() * 10)`

---

### Itération 6 : Premier générateur

**Consigne :** Regarde la fonction `genererMotDePasse()`. Elle :

1. Crée une chaîne de caractères `caracteres`
2. Récupère la longueur choisie
3. Boucle `longueur` fois
4. À chaque tour, choisit un caractère au hasard
5. Affiche le résultat

Clique plusieurs fois sur Générer. Le mot de passe change-t-il ?

**Concepts :**
- Assembler variables, boucles et hasard
- Construire un mot de passe caractère par caractère

---

### Itération 7 : Majuscules avec `if/else`

**Consigne :** Dans `genererMotDePasse()`, essaie de séparer minuscules et majuscules :

```js
let minuscules = "abcdefghijklmnopqrstuvwxyz";
let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// dans la boucle :
if (Math.random() < 0.5) {
    // prendre une minuscule
} else {
    // prendre une majuscule
}
```

**Concepts :**
- `if/else` = choisir entre deux possibilités

---

### Itération 8 : Chiffres et symboles

**Consigne :** Reviens à la version finale (`caracteres` contient tout). C'est plus simple et plus efficace.

Question : pourquoi est-ce que mélanger les 4 types dans une seule chaîne fonctionne aussi bien ?

**Concepts :**
- Plusieurs façons de résoudre un même problème
- Choisir la solution la plus simple

---

### Itération 9 : Interface visuelle

**Consigne :** Joue avec `style.css` :

- Change les couleurs (`#00d9ff`, `#e94560`...)
- Change la taille du texte (`font-size`)
- Change la forme des boutons (`border-radius`)

**Concepts :**
- CSS contrôle l'apparence
- Les couleurs s'écrivent souvent en hexadécimal (`#ff0000` = rouge)

---

### Itération 10 : Connecter les boutons

**Consigne :** Regarde le bas de `script.js`. On "écoute" les clics avec :

```js
bouton.addEventListener("click", genererMotDePasse);
```

Ajoute un message quand on clique sur Copier.

**Concepts :**
- `document.getElementById("...")` sélectionne un élément HTML
- `addEventListener` réagit aux actions de l'utilisateur
- `textContent` change le texte affiché

---

### Itération 11 : Le slider de longueur

**Consigne :** Le slider est déjà fonctionnel ! Lis ce code :

```js
slider.addEventListener("input", function () {
    longueurAffichage.textContent = slider.value;
});
```

Essaye de changer `min="6"` ou `max="24"` dans `index.html`.

**Concepts :**
- `<input type="range">` = un curseur
- L'événement `input` se déclenche à chaque déplacement du curseur

---

## 🏆 Critères de réussite

| Itération | Compétence | Validation |
|---|---|---|
| 1-2 | Variables | Peut créer et utiliser une variable |
| 3-4 | Tableaux et boucles | Peut créer un tableau et le parcourir |
| 5-6 | Hasard | Comprend `randomInt(min, max)` et génère un mot de passe |
| 7-8 | Logique conditionnelle | Comprend `if/else` |
| 9-10 | Interface | Le bouton affiche bien un mot de passe |
| 11 | Autonomie | Modifie la longueur et l'interface |

## 💡 Conseils pour l'enseignant

- Faire 1 à 2 itérations par séance de 45 minutes.
- Laisser les élèves expérimenter : modifier les couleurs, les caractères, la longueur.
- Insister sur le fait qu'il n'y a pas besoin de console : tout se voit à l'écran.

## 🎁 Défis bonus

1. Ajouter un indicateur "faible / moyen / fort"
2. Ajouter une case à cocher pour activer/désactiver les symboles
3. Garder les 5 derniers mots de passe affichés en dessous
4. Créer un second bouton "Générer un PIN à 4 chiffres"

## 📝 Glossaire

| Terme | Explication |
|---|---|
| Variable | Une boîte nommée qui contient une valeur |
| Tableau | Une liste d'éléments |
| Boucle | Des instructions qui se répètent |
| Condition | Un choix : si X alors Y, sinon Z |
| Fonction | Un bloc de code réutilisable |
| Événement | Une action de l'utilisateur (clic, déplacement...) |
| DOM | L'ensemble des éléments de la page web |
