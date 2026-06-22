/* ============================================================
   Générateur de mots de passe + phrases de passe
   Version shadcn dark – tout s'affiche dans la page
   ============================================================ */

// ---- Dictionnaire pour les phrases de passe ----
const DICO = ["soleil","lune","etoile","nuage","pluie","vent","feu","terre","mer","montagne","riviere","foret","chemin","jardin","fleur","arbre","pierre","sable","glace","feuille","ciel","arc","fleche","pont","tour","chateau","porte","clef","lampe","miroir","livre","table","chaise","fenetre","mur","toit","escalier","salle","cuisine","bureau","ecole","cahier","stylo","crayon","gomme","regle","sac","balle","jeu","film","musique","danse","chant","fete","amour","ami","coeur","reve","sage","fort","doux","libre","grand","petit","long","clair","frais","pur","vrai","beau","bon","neuf","vif","calme","chaud","triste","gai","jeune","vieux","pauvre","riche","simple","noble","digne","saint","fier","juste","hardi","loyal","brave","fin","subtil","vague","brume","orage","clairon","lutin","geant","sorcier","elfe","dragon","phoenix","licorne","aigle","hibou","renard","loup","ours","biche","chat","chien","lion","tigre","paon","cygne","abeille","fourmi","papillon","coccinelle","escargot","herisson","ecureuil","lapin","baleine","dauphin","requin","pieuvre","crabe","phoque","pingouin","mouette","colombe","merle","moineau","corbeau","pie","faucon","buse","geai","pinson","rougegorge","mesange","grive","etourneau","hirondelle","martinet","cigogne","heron","flamant","ibis","pelican","albatros","goeland","sterne","macareux","eider","canard","oie","cygne","poule","coq","dindon","paon","faisan","perdrix","caille","bécasse","vanneau","pluvier","chevalier","barge","courlis","bécassine","râle","poule d eau","foulque","grebe","plongeon","pingouin","guillemot","marmette","starique","macareux","perroquet","ara","amazone","conure","pionus","cacatoes","lory","loris","inséparable","calopsitte","perruche","kakariki","mélopsittaque","toujours","jamais","parfois","souvent","tard","tôt","hier","demain","aujourd hui","nuit","matin","soir","aube","crépuscule","minuit","midi","hiver","printemps","été","automne","saison","janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre","lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche","zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","cent","mille","million","milliard"];

// ---- Helpers ----
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---- Éléments DOM ----
const resultat = document.getElementById("resultat");
const bouton = document.getElementById("bouton");
const copier = document.getElementById("copier");
const message = document.getElementById("message");

// Mode toggle
const btnPassword = document.getElementById("btnPassword");
const btnPassphrase = document.getElementById("btnPassphrase");
const passwordOptions = document.getElementById("passwordOptions");
const passphraseOptions = document.getElementById("passphraseOptions");

// Password controls
const slider = document.getElementById("slider");
const longueurAffichage = document.getElementById("longueurAffichage");
const chkMaj = document.getElementById("chkMaj");
const chkChiffres = document.getElementById("chkChiffres");
const chkSymboles = document.getElementById("chkSymboles");
const strengthLabel = document.getElementById("strengthLabel");

// Passphrase controls
const sliderMots = document.getElementById("sliderMots");
const nbMotsAffichage = document.getElementById("nbMotsAffichage");
const sepLabel = document.getElementById("sepLabel");
const chkMajPremier = document.getElementById("chkMajPremier");
const chkChiffreFin = document.getElementById("chkChiffreFin");

let mode = "password"; // "password" | "passphrase"

// ---- Toggle mode ----
btnPassword.addEventListener("click", () => setMode("password"));
btnPassphrase.addEventListener("click", () => setMode("passphrase"));

function setMode(m) {
    mode = m;
    btnPassword.classList.toggle("active", m === "password");
    btnPassphrase.classList.toggle("active", m === "passphrase");
    passwordOptions.style.display = m === "password" ? "block" : "none";
    passphraseOptions.style.display = m === "passphrase" ? "block" : "none";
    generer();
}

// ---- Password generator ----
function genererMotDePasse() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (chkMaj.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chkChiffres.checked) chars += "0123456789";
    if (chkSymboles.checked) chars += "!@#$%&*";

    if (!chkMaj.checked && !chkChiffres.checked && !chkSymboles.checked) {
        // Fallback : au moins des minuscules
        chars = "abcdefghijklmnopqrstuvwxyz";
    }

    const longueur = parseInt(slider.value);
    let mdp = "";
    for (let i = 0; i < longueur; i++) {
        mdp += chars[randomInt(0, chars.length - 1)];
    }
    resultat.textContent = mdp;

    // Force
    const l = mdp.length;
    let niveau = "Faible";
    if (l >= 6 && (chkMaj.checked || chkChiffres.checked || chkSymboles.checked)) niveau = "Moyen";
    if (l >= 10 && chkMaj.checked && chkChiffres.checked && chkSymboles.checked) niveau = "Fort";
    if (l >= 16 && chkMaj.checked && chkChiffres.checked && chkSymboles.checked) niveau = "Très fort";
    strengthLabel.textContent = niveau;
    strengthLabel.style.color = niveau === "Faible" ? "var(--err)" : niveau === "Très fort" ? "var(--accent)" : "var(--accent)";
}

// ---- Passphrase generator ----
function genererPhraseDePasse() {
    const nbMots = parseInt(sliderMots.value);
    const majPremier = chkMajPremier.checked;
    const ajoutChiffre = chkChiffreFin.checked;

    let mots = [];
    for (let i = 0; i < nbMots; i++) {
        let mot = DICO[randomInt(0, DICO.length - 1)];
        if (majPremier && i === 0) {
            mot = mot.charAt(0).toUpperCase() + mot.slice(1);
        }
        mots.push(mot);
    }

    let phrase = mots.join("-");
    if (ajoutChiffre) {
        phrase += randomInt(0, 99);
    }

    resultat.textContent = phrase;
    sepLabel.textContent = "séparateur : -";
}

// ---- Generate (dispatch) ----
function generer() {
    if (mode === "password") {
        genererMotDePasse();
    } else {
        genererPhraseDePasse();
    }
    message.textContent = "";
}

// ---- Events ----
slider.addEventListener("input", () => {
    longueurAffichage.textContent = slider.value;
    generer();
});
sliderMots.addEventListener("input", () => {
    nbMotsAffichage.textContent = sliderMots.value;
    generer();
});

chkMaj.addEventListener("change", generer);
chkChiffres.addEventListener("change", generer);
chkSymboles.addEventListener("change", generer);
chkMajPremier.addEventListener("change", generer);
chkChiffreFin.addEventListener("change", generer);

bouton.addEventListener("click", generer);

copier.addEventListener("click", () => {
    const txt = resultat.textContent;
    if (!txt || txt === "Clique sur Générer") {
        setMessage("Rien à copier !", "err");
        return;
    }
    navigator.clipboard.writeText(txt).then(() => {
        setMessage("Copié !", "ok");
    }).catch(() => {
        // Fallback pour certains environnements
        const ta = document.createElement("textarea");
        ta.value = txt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setMessage("Copié ! (fallback)", "ok");
    });
});

function setMessage(txt, type) {
    message.textContent = txt;
    message.className = "message" + (type ? " " + type : "");
    setTimeout(() => { message.textContent = ""; message.className = "message"; }, 2500);
}

// ---- Démarrage ----
generer();
