/*
 * ## Énoncé

Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.

## Détails

* On peut saisir un nombre entier comme un nombre à virgule.

## Rappels

* Il existe un moyen déjà vu précédemment pour vérifier qu'une valeur et un nombre ou pas...
 */

let numP
do{
     numP = prompt("Please insert only a Number")

} while(isNaN (numP))

document.write(`<h1> The number your wrote is : ${numP}</h1>`)