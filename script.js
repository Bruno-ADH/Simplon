
// const firstNumber = prompt("Entrez un premier nombre")
// const secondNumber = prompt("Entrez le second nombre")
// const z = prompt("Entrez l'opérateur")

// const x = Number(firstNumber)
// const y = Number(secondNumber)

// if ((Number.isNaN(x) && Number.isNaN(y))) {
//     console.log(firstNumber, " et ", secondNumber, " sont pas des nombres");
// } else if (Number.isNaN(y)) {
//     console.log(secondNumber, " n'est pas un nombre");
// } else if (Number.isNaN(x)) {
//     console.log(firstNumber, "n'est pas un nombre");
// } else if (!(Number.isNaN(x) && Number.isNaN(y))) {
//     if (z === "+") console.log(`${x} + ${y} = ${x + y}`)
//     if (z === "-") console.log(`${x} - ${y} = ${x - y}`)
//     if (z === "*") console.log(`${x} * ${y} = ${x * y}`)
//     if ((z === "/") && (y !== 0)) console.log(`${x} / ${y} = ${x / y}`)
// }

/**
 * Nombre paire
 */
// for(let i = 1; i <= 20; i++){
//     if((i%2)===0) console.log(`${i} est paire`)
// }

/**
 * Jeu de devinette
 */
// const randomNumber = Math.floor(Math.random() * 16)
// console.log('randomNumber :>> ', randomNumber);
// let number

// do {
//     number = prompt("Devinez un nombre entier compris entre 0 et 15")
//     number = Number(number)

//     if (!Number.isNaN(number)) {
//         if (number === randomNumber) {
//             console.log("Felicitations");
//         } else {
//             console.log("Mauvaise réponse")
//         }
//     } else {
//         console.log("Entrez un nombre valide");
//     }
// } while (number !== randomNumber) 

//zAuthentification
const truePassword = "#Pass&Word022025"
let password

while(password !== truePassword){
    password = prompt("Entrez le mot de passe")
    if(password === truePassword){
        console.log("Excellent hacker !");
    } else {
        console.log("Réessayer")
    }
}