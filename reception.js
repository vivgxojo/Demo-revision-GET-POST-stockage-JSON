/*
 * Partie 1 de la démo
 * Récupérer des données de l'url
 * Les données sont envoyées par un formulaire (envoi.html) par la méthode GET
 * Les données sont récupérées ici par URLSearchParams et affichées
 * dans la page (reception.html)
 */

// Ex. url http://localhost/interface/demo.html?montant=4&nom=Patate
// Créer un objet à partir des données du l'URL
const params = new URLSearchParams(document.location.search);
const nom = params.get("nom"); // Obtenir les valeurs envoyes par le formulaire...
const don = params.get("don"); //... Les clés doivent être les attributs names
if(nom || don){
    afficherPersonne(nom, don);
}

function afficherPersonne(nom, don){
    $('#reception').append(
        `<p>Nom: ${nom}</p>
        <p>Don: ${don}</p>`
    );
}

/*
 * Partie 2 de la démo
 * Récupérer des données à partir du stockage local
 */

const personne = JSON.parse(localStorage.getItem('personne'));
//afficherPersonne(personne.nom, personne.don);

// Correction du défi
let liste = JSON.parse(localStorage.getItem('list')); // Récupérer la liste sauvegardée
if(liste === null){
    liste = [] // Si c'est la première fois la liste est null, il faut l'initialiser
}
liste.push(personne); // Ajouter la nouvelle personne dans la liste
localStorage.setItem('list', JSON.stringify(liste)); // Sauvegarder la liste
/*for(let i = 0; i < liste.length; i++){
    afficherPersonne(liste[i].nom, liste[i].don); // Afficher la liste
}*/
for(pers of liste){
    afficherPersonne(pers.nom, pers.don); // Afficher la liste
}

