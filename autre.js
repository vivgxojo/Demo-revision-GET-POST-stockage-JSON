/*
* Démo partie 3 :
* J'ai modifié la fonction pour prendre un seul paramètre : l'objet personne à afficher
* */
function afficherPersonne(personne){
    $('body').append(
        `<p>Nom: ${personne.nom}</p>
     <p>Don: ${personne.don}</p>`
    );
}

// On n'envoie pas de données à autre.html
// On a toujours accès au stockage local, donc on peut récupérer les données
const personne = JSON.parse(localStorage.getItem('personne'));
//afficherPersonne(personne);

//Un objet créé directement avec la syntaxe JSON.
const personne2 = { "nom" : "Alex",
                    "don" : 6};
//afficherPersonne(personne2);

// 3e objet à partir d'une string JSON:
const personne3 = JSON.parse('{ "nom" : "Émilie", "don" : 5}');
//afficherPersonne(personne3);

//Une liste de personnes
let listePersonnes = [personne2, personne3]; // Initialiser la liste avec 2 objets
listePersonnes.push(personne); // Ajouter un objet dans la liste
/*
for(let i = 0; i < listePersonnes.length; i++){
    afficherPersonne(listePersonnes[i]);
}
*/
localStorage.setItem('list', JSON.stringify(listePersonnes));

liste2 = JSON.parse(localStorage.getItem('list'));

for(let i = 0; i < liste2.length; i++){
    afficherPersonne(liste2[i]);
}



