
// const soustration = (a, b) => `${a} - ${b} = ${a - b}`;

// const division = (a, b) => {
//     console.log(`${a} / ${b} = ${a / b}`);
// }

// function addition(a, b) {
//     console.log(`${a} + ${b} = ${a + b}`)
// }

// function multiplication(a, b) {
//     console.log(`${a} * ${b} = ${a * b}`)
// }

// const firstNumber = prompt("Entrez un premier nombre")
// const secondNumber = prompt("Entrez le second nombre")
// const z = prompt("Choisissez un opérateur compris entre : + - * / ")

// const x = Number(firstNumber)
// const y = Number(secondNumber)

// if ((Number.isNaN(x) && Number.isNaN(y))) {
//     console.log(firstNumber, " et ", secondNumber, " sont pas des nombres");
// } else if (Number.isNaN(y)) {
//     console.log(secondNumber, " n'est pas un nombre");
// } else if (Number.isNaN(x)) {
//     console.log(firstNumber, "n'est pas un nombre");
// } else if (!(Number.isNaN(x) && Number.isNaN(y))) {
//     switch (z) {
//         case "+":
//             addition(x, y)
//             break;
//         case "-":
//             console.log(soustration(x, y));
            
//             break;
//         case "*":
//             multiplication(x, y)
//             break;
//         case "/":
//             if (y !== 0) {
//                 division(x, y)
//             } else {
//                 console.log("Division pas 0 impossible");

//             }
//             break;

//         default:
//             console.log("Cet opérateur n'est pas pris en charge");
//             break;
//     }
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
// const randomNumber = Math.floor(Math.random() * 101)
// let near = []
// for (let i = (randomNumber-10); i <= (randomNumber+10); i++) {
//     if(i !== randomNumber) near.push(i);
// }

// // console.log('randomNumber :>> ', randomNumber);
// // console.log(' near :>> ',  near);
// let number

// do {
//     number = prompt("Devinez un nombre entier compris entre 0 et 15 🐱‍👤")
//     number = Number(number)

//     if (!Number.isNaN(number)) {
//         if (number === randomNumber) {
//             console.log("Felicitations✨🥳");
//         } else if (near.includes(number)) {
//             console.log("Ça chauffe🥵");
//         } else {
//             console.log("Ça refroidit🥶")
//         }
//     } else {
//         console.log("Entrez un nombre valide😒");
//     }
// } while (number !== randomNumber)

//Authentification
// const truePassword = "#Pass&Word022025"
// let password

// while(password !== truePassword){
//     password = prompt("Entrez le mot de passe")
//     if(password === truePassword){
//         console.log("Excellent hacker !");
//     } else {
//         console.log("Réessayer")
//     }
// }



// const rond = document.querySelector("#rond");

rond.addEventListener("mouseover", (e) => {
    rond.style.backgroundColor = "red"
})

rond.addEventListener("mouseout",(e)=>{
    rond.style.backgroundColor = "blue"
})

const rond = document.querySelector("#rond");

document.addEventListener("mousemove", function(event) {
      const x = event.clientX;
      const y = event.clientY;

      rond.style.left = y + "px";
      rond.style.top = x + "px";
  });

const btn = document.querySelector("button")

btn.addEventListener("click", (e) => {
    console.log('e :>> ', e);
    console.log("Vous avez cliqué");
})
