/*-------------------------------------------------Exercice4-TVA_avec_remise

## Énoncé

L'utilisateur saisit un montant HT et s'il le souhaite une remise, le résultat TTC s'affiche en HTML.

## Détails

* L'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
* La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s'applique sur le montant HT autrement il y a fraude à la TVA ;-)
* Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
* S'il n'y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
* Il faut répéter le moins de code possible, notamment **il ne faut pas répéter le calcul du montant TTC final**.
*/

//Reponse 

// const TVA = 20;
// const prixHT = window.prompt("Write the value of your basquet");
// const remiseInput = window.prompt("Please insert your price and remise discount ?");
// const remise = remiseInput / 100;
// const prixTTC = prixHT + 0.2;


// document.write(`<h1>Calculatrice HT et Remise</h1>`);
// document.write('<h2>🤩🤩 Glad you comme back 🤩🤩 </h2>')

//     document.write(`<ul>`)

// document.write('<li>')
// document.write(`PrixHT sans remise: ${prixHT}€}`);
// document.write('</li>')

// document.write('<li>')
// document.write(`prix TVA: ${TVA/100}€`)
// document.write('</li>')

// document.write('<li>')
// document.write(`PrixTTC: ${prixTTC}€`)
// document.write('</li>')


// document.write('<li>')
// document.write(`PrixTTC avec Remise: ${prixTTC - remise}€`);
// document.write('</li>')

//     document.write(`</ul>`)


/*-------------------------------------------------Exercice5-Calculatrice_numerique
## Énoncé

L'utilisateur saisit deux nombres ainsi que l'opération mathématique souhaitée, le résultat de cette opération s'affiche en HTML.

Les opérations mathématiques acceptées sont :

* L'addition : *a + b*
* La soustraction : *a - b*
* La multiplication : *a * b*
* La division : *a / b*
* La puissance : *a ^ b* (exemple : *3 ^ 2 = 9*)

## Détails

* Il faut afficher une erreur en cas d'opération mathématique inconnue.
* Les nombres saisis peuvent être à virgule.
* L'utilisateur doit pouvoir autant saisir **le nom de l'opération** que **l'opérateur** correspondant : *+ - * / ^*
* Il faut répéter le moins de code possible, notamment le code d'affichage du résultat.

## Rappels

* La division par zéro n'existe pas, il faut donc gérer ce cas...
*/

                                                // REPONSE
// // // document.write(`<h1>Calculatrice</h1>`);
// // // document.write('<h2>🤩🤩 Glad you comme back 🤩🤩 </h2>')

/*
Lo que hace la boucle "do while" es poner una condicion y repetirla hasta que el input correcto sea el buscado.. En este caso isNaN() lo que pone como condicion es que el input sea un 
numero. 
despues 
*/
// // // let valueA; //---------------------------------
// // // do {
// // //     valueA = window.prompt("please write the value of -A- only numbers possible");
// // // }while(isNaN(valueA))

// // // let valueB; //-------------------------------
// // // do {
// // //     valueB = window.prompt("please write the value of -B- only numbers possible");
// // // }while(isNaN(valueB))
// // // let operator;

// // // do {         //-----------------------------------
// // //     operator = window.prompt("please write the operator you need only  *, -, /, +, %");
// // // }while(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%")

// // // const A = parseInt(valueA);
// // // const B = parseInt(valueB);

// // // if(isNaN(A)){
   
// // // }else if(isNaN(B)){
    
// // // } else{
// // //     switch(operator){
// // //     case "+":
// // //         document.write(`${A} + ${B} = ${A+B}`);
// // //         break;
// // //     case "-":
// // //         document.write(`${A} - ${B} = ${A-B}`);
// // //     break;
// // //     case "*":
// // //         document.write(`${A} * ${B} = ${A*B}`);
// // //     break;
// // //     case "**":
// // //         document.write(`${A} ** ${B} = ${A**B}`);
// // //     break;
// // //     case "/":
// // //         document.write(`${A} / ${B} = ${A/B}`);
// // //     break;
// // //     case "%":
// // //         document.write(`${A} % ${B} = ${A%B}`);
// // //     break;
// // //         case "-":
// // //         document.write(`${A} - ${B} = ${A-B}`);
// // //     break;
// // //     case "":
// // //         window.alert("Missing operator!!");        
// // //     break;
// // // };
// // // }



/*-------------------------------------------------Exercice6-Chifoumi

## Énoncé

L'utilisateur saisit le mot *pierre*, *feuille* ou *ciseau*, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !

## Détails

* Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.

## Rappels

* Si le joueur et l'ordinateur font le même choix on obtient une égalité.
* Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
* La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
* La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd).
*/
 
document.write("✂️ 💎 🧻   - Play the game -  ✂️ 💎 🧻");
const jeux = ["Rock", "Scissors", "Paper"];


let element; //----------------------------------- Player Choise
do {         
    element = window.prompt("Please choose un attack attentin 3 posibilites accepted : Rock, Scissors or Paper");
} while(element !== "Rock" && element !== "Scissors" && element !== "Paper");
const userChoise = element;
document.write(`<h2> Player Choise: ${userChoise}</h2>`)



function randomIndex() {  //----------------------------------- IA Choise 
    return Math.floor(Math.random() * 3);
}
const iaChoise = jeux[randomIndex()];
document.write(`<h2>IA choosed : ${iaChoise} </h2>`);


/*
        Lo que tiene de interesante es que al poner swtich(true )
*/
switch (true) { //----------------------------------- Conditions 
    case(iaChoise === userChoise):
    document.write(`Its Null !! `);
    break;

    //Ia Wins
    case(iaChoise === "Rock" && userChoise === "Scissors"):
    document.write(`IA WiNS`);
    break;

    case(iaChoise === "Scissors" && userChoise === "Paper"):
    document.write(`IA WiNS`);
    break;    

    case(iaChoise === "Paper" && userChoise === "Rock"):
    document.write(`IA WiNS`);
    break;  
    
    //USer wins
    case(iaChoise === "Paper" && userChoise === "Scissors"):
    document.write(`Player Wins`);
    break;
    
    case(iaChoise === "Rock" && userChoise === "Paper"):
    document.write(`Player Wins`);
    break;

    case(iaChoise === "Scissors" && userChoise === "Rock"):
    document.write(`Player Wins`);
    break;
};
