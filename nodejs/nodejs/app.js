// // console.log(process.argv)

// const path =require ("path");
// const filePath = path.join('/cpocpo', 'papa','toto',"test.txt");
// console.log("chemin absolu :",filePath);

// const path = require("path");

// const filePath = path.join(__dirname, "text.txt" );
// console.log("Chemin absolu :", filePath);

const fs = require("fs");

// Lire le fichier en mode synchrone
const data = fs.readFileSync("test.txt", "utf-8");
console.log("Contenu du fichier :", data);

