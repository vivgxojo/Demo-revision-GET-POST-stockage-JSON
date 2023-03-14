/*
 Partie 2 de la démo :
 - Modifier get par post - on ne peut plus envoyer les données par l'URL
 - Envoyer les données du formulaire dans le stockage local
 - On peut seulement stocker des chaînes de caractères dans le stockage local :
    on doit transformer les objets en chaîne de caractères - JSON.stringify
 */

/**
 * Représente une personne qui fait un don
 * @param nom de la personne (string)
 * @param don qu'effectue la personne (int)
 * @constructor
 */
function Personne(nom = "Line", don = 1){
    this.nom =nom;
    this.don = don;
}

/**
 * Prend les données du formulaire
 * Crée un objet
 * Le stocke dans le stockage local
 */
function stockage(){
    //Aller chercher les données
    const nom = $('#nom').val();
    const don = $('#don').val();
    //Créer un objet
    const personne = new Personne(nom, don);
    //Stocker l'objet dans le stockage local
    localStorage.setItem('personne', JSON.stringify(personne));
    return true;
}