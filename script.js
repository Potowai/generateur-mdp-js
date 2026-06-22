/* ============================================================
   Générateur — mot de passe + phrase de passe
   ============================================================ */

const DICO = ["soleil","lune","etoile","nuage","pluie","vent","feu","terre","mer","montagne","riviere","foret","chemin","jardin","fleur","arbre","pierre","sable","glace","feuille","ciel","arc","fleche","pont","tour","chateau","porte","clef","lampe","miroir","livre","table","chaise","fenetre","mur","toit","escalier","salle","cuisine","bureau","ecole","cahier","stylo","crayon","gomme","regle","sac","balle","jeu","film","musique","danse","chant","fete","amour","ami","coeur","reve","sage","fort","doux","libre","grand","petit","long","clair","frais","pur","vrai","beau","bon","neuf","vif","calme","chaud","triste","gai","jeune","vieux","pauvre","riche","simple","noble","digne","saint","fier","juste","hardi","loyal","brave","fin","subtil","vague","brume","orage","clairon","lutin","geant","sorcier","elfe","dragon","phoenix","licorne","aigle","hibou","renard","loup","ours","biche","chat","chien","lion","tigre","paon","cygne","abeille","fourmi","papillon","coccinelle","escargot","herisson","ecureuil","lapin","baleine","dauphin","requin","pieuvre","crabe","phoque","pingouin","mouette","colombe","merle","moineau","corbeau","pie","faucon","buse","geai","pinson","rougegorge","mesange","grive","etourneau","hirondelle","martinet","cigogne","heron","flamant","ibis","pelican","albatros","goeland","sterne","macareux","eider","canard","oie","cygne","poule","coq","dindon","paon","faisan","perdrix","caille","becasse","vanneau","pluvier","chevalier","barge","courlis","becassine","rale","poule d eau","foulque","grebe","plongeon","pingouin","guillemot","marmette","starique","macareux","perroquet","ara","amazone","conure","pionus","cacatoes","lory","loris","inseparable","calopsitte","perruche","kakariki","melopsittaque","toujours","jamais","parfois","souvent","tard","tot","hier","demain","aujourd hui","nuit","matin","soir","aube","crepuscule","minuit","midi","hiver","printemps","ete","automne","saison","janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre","lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche","zero","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","cent","mille","million","milliard"];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---- DOM refs ----
const resultat = document.getElementById("resultat");
const resultatWrap = resultat.closest(".resultat-wrap");
const bouton = document.getElementById("bouton");
const copier = document.getElementById("copier");
const message = document.getElementById("message");

const btnPassword = document.getElementById("btnPassword");
const btnPassphrase = document.getElementById("btnPassphrase");
const passwordOptions = document.getElementById("passwordOptions");
const passphraseOptions = document.getElementById("passphraseOptions");

const slider = document.getElementById("slider");
const longueurAffichage = document.getElementById("longueurAffichage");
const chkMaj = document.getElementById("chkMaj");
const chkChiffres = document.getElementById("chkChiffres");
const chkSymboles = document.getElementById("chkSymboles");
const strengthLabel = document.getElementById("strengthLabel");

const sliderMots = document.getElementById("sliderMots");
const nbMotsAffichage = document.getElementById("nbMotsAffichage");
const chkMajPremier = document.getElementById("chkMajPremier");
const chkChiffreFin = document.getElementById("chkChiffreFin");

let mode = "password";

// ---- Mode toggle ----
btnPassword.addEventListener("click", () => setMode("password"));
btnPassphrase.addEventListener("click", () => setMode("passphrase"));

function setMode(m) {
    mode = m;
    btnPassword.classList.toggle("active", m === "password");
    btnPassword.setAttribute("aria-selected", m === "password");
    btnPassphrase.classList.toggle("active", m === "passphrase");
    btnPassphrase.setAttribute("aria-selected", m === "passphrase");
    passwordOptions.style.display = m === "password" ? "" : "none";
    passphraseOptions.style.display = m === "passphrase" ? "" : "none";
    generer();
}

// ---- Glow helper ----
function setGlow(color) {
    resultatWrap.style.setProperty("--glow", color);
    if (color) {
        resultatWrap.classList.add("has-glow");
    } else {
        resultatWrap.classList.remove("has-glow");
    }
}

// ---- Password generator ----
function genererMotDePasse() {
    let minuscules = "abcdefghijklmnopqrstuvwxyz";
    let majuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let chiffres = "0123456789";
    let symboles = "!@#$%&*";
    let tout = minuscules + majuscules + chiffres + symboles;

    let longueur = parseInt(slider.value);
    let mdp = "";

    // 1 garanti de chaque type coché
    if (chkMaj.checked) mdp += majuscules[randomInt(0, majuscules.length - 1)];
    if (chkChiffres.checked) mdp += chiffres[randomInt(0, chiffres.length - 1)];
    if (chkSymboles.checked) mdp += symboles[randomInt(0, symboles.length - 1)];

    // 2 remplir le reste
    let reste = longueur - mdp.length;
    for (let i = 0; i < reste; i++) {
        mdp += tout[randomInt(0, tout.length - 1)];
    }
    resultat.textContent = mdp;

    // Strength assessment
    const l = mdp.length;
    const types = (chkMaj.checked ? 1 : 0) + (chkChiffres.checked ? 1 : 0) + (chkSymboles.checked ? 1 : 0);
    let niveau, glow;
    if (l < 8 || types < 2) {
        niveau = "Faible";
        glow = "#ef4444";
    } else if (l < 12 || types < 3) {
        niveau = "Moyen";
        glow = "#f59e0b";
    } else if (l < 20) {
        niveau = "Fort";
        glow = "#22c55e";
    } else {
        niveau = "Très fort";
        glow = "#22c55e";
    }
    strengthLabel.textContent = niveau;
    setGlow(glow);
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

    // Passphrase glow based on word count
    const glow = nbMots >= 6 ? "#22c55e" : nbMots >= 4 ? "#f59e0b" : "#ef4444";
    setGlow(glow);
}

// ---- Dispatch ----
function generer() {
    if (mode === "password") {
        genererMotDePasse();
    } else {
        genererPhraseDePasse();
    }
    message.textContent = "";
    message.className = "message";
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
        setMessage("Rien à copier", "err");
        return;
    }
    navigator.clipboard.writeText(txt).then(() => {
        setMessage("Copié dans le presse-papiers", "ok");
    }).catch(() => {
        const ta = document.createElement("textarea");
        ta.value = txt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setMessage("Copié", "ok");
    });
});

function setMessage(txt, type) {
    message.textContent = txt;
    message.className = "message" + (type ? " " + type : "");
    setTimeout(() => { message.textContent = ""; message.className = "message"; }, 2500);
}

// ---- Keyboard shortcut ----
document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") generer();
});

// ---- Init ----
generer();
