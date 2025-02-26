
const path = require('node:path');
const fs = require("node:fs")
// const prenom = process.argv[2] || "inconnu";
// console.log(`Bonjour, ${prenom} ! Bienvenue dans le monde de Node.js. 🚀`);
// console.log(process.argv);
const pathToTest = path.join(__dirname,"upload/text/test.txt")
console.log('pathToTest :>> ', pathToTest);

const data = fs.readFileSync(pathToTest, "utf8")
console.log('data :>> ', data,"\n\n");