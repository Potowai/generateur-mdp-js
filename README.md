# 🔐 Générateur de Mots de Passe — TP JavaScript

Un projet pédagogique complet pour apprendre JavaScript en créant un générateur de mots de passe et phrases de passe, destiné aux élèves de 14 ans débutant·e·s en programmation.

---

## 📦 Fichiers du projet

| Fichier | Description |
|---|---|
| **tp-onefile.html** | TP interactif avec 13 itérations auto-guidées, éditeur de code intégré, validation automatique et sauvegarde. |
| **index.html** | Version "professionnelle" du générateur (design shadcn dark) — slider 6–128, force du mot de passe, mode phrase de passe. |
| **student.html** | Version simplifiée pour les élèves — 1 fichier déployable sur Netlify Drop, code commenté à compléter. |
| **student-style.css** | Styles de la version student. |
| **style.css** | Styles de la version index. |
| **script.js** | Logique complète de la version index (mot de passe + phrase de passe + force + glow). |

---

## 🎯 Objectifs pédagogiques (tp-onefile.html)

13 itérations progressives qui couvrent :

| It | Concept | L'élève doit... |
|---|---|---|
| 1 | Console | Écrire son premier `console.log("Salut...")` |
| 2 | Variables | Créer une variable `groupe` et l'afficher |
| 3 | Tableaux | Accéder aux éléments d'un tableau par index |
| 4 | Boucle for | Parcourir une boucle et afficher des nombres |
| 5 | Aléatoire | Utiliser `randomInt(min, max)` |
| 6 | Conditions if/else | Modifier une condition pour afficher "mineur" |
| 7 | Générateur simple | Boucle + randomInt → 6 lettres minuscules |
| 8 | Majuscules | Ajouter if/else pour mélanger minuscules/majuscules |
| 9 | Tous les types | Intégrer chiffres et symboles |
| 10 | Tableau de caractères | Générer depuis un tableau (array) |
| 11 | Fonction | Encapsuler la génération dans une fonction |
| 12 | Longueur variable | Utiliser une variable pour la taille |
| 13 | 🏆 Phrase de passe | Dictionnaire + boucle → phrase de 4 mots |

Chaque itération : consigne, code starter à compléter, validation automatique, animation de succès.

---

## 🚀 Déploiement

Tous les fichiers `.html` sont prêts pour **Netlify Drop** :
1. Glisser `student.html` (ou `index.html`) sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. C'est fait.

---

## 🛠 Utilisation

### TP guidé (pour la classe)
Ouvrir `tp-onefile.html` dans un navigateur. Les élèves suivent les itérations dans l'ordre.

### Générateur autonome
Ouvrir `index.html` — deux modes (mot de passe / phrase de passe), slider jusqu'à 128 caractères, indicateur de force visuel.

### Projet élève
`student.html` — l'élève doit écrire le code de génération lui-même en suivant les commentaires.

---

## 🧠 Concepts JavaScript abordés

- Variables (`let`)
- Types : chaînes, nombres, tableaux
- `console.log()`
- Boucles `for`
- Conditions `if / else`
- Fonctions
- `Math.random()` & `Math.floor()`
- Manipulation du DOM (`document.getElementById`, `textContent`)
- Événements (`click`, `input`)

---

## 📄 Licence

Libre pour usage pédagogique.
