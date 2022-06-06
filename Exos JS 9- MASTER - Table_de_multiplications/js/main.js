// Demande la taille maximum de la table des multiplications.
let size = parseInt(prompt("Choisissez un nombre!"))
// Initialisation de la table des multiplications. (tableau vide)
let tableMulti = []

// Construction de la table des multiplications de 1 jusqu'à la variable size. (boucle for)
for(let row = 1; row <= size; row++){
    // Pour chaque nouvelle ligne il faut créer un nouveau tableau. (tableau vide)
    tableMulti[row] = []
    //boucle for sur les colonnes
    for(let column = 1; column <= size; column++){
        // Stockage du résultat du calcul dans la table des multiplications.
        tableMulti[row][column] = row * column
    }
}
    
/*  row [
     1       [1,2,3,4,5],  column  1 2 3 4 5
     2       [3,4,6,8,10],  column  1 2 3 4 5
     3       [3,4,6,8,10],  column  1 2 3 4 5
     4       [3,4,6,8,10],  column  1 2 3 4 5
     5       [3,4,6,8,10]  column  1 2 3 4 5
     
        ]*/
        
console.log(tableMulti)


// Création en HTML de la table des multiplications.
document.write("<table>")
// Boucle for pour créer le tableau HTML
for(let row = 1; row <= size; row++){
    // Création de la ligne de tableau (tr) HTML.
    document.write("<tr>")
    //boucle for qui va créer les colonnes du tableau pour chaque ligne
    for(let column = 1; column <= size; column++){
        // Si les deux nombres multipliés sont les mêmes...
        if(row === column){
            // ...Alors on créé une cellule (td) HTML à laquelle on applique une classe CSS.
            document.write('<td class="same-number">')
        //sinon
        }else{
            //on créé simplement une cellule HTML. (td)
            document.write("<td>")
        }     
        // Écriture dans la cellule HTML du résultat contenu dans la table des multiplications.
        document.write(tableMulti[row][column])
        // Fermeture de la cellule HTML.(td)
        document.write("</td>")
    }    
        
    //fermeture du tr (ligne)
    document.write("</tr>")
}    


// Fermeture du tableau HTML.
document.write("</table>")