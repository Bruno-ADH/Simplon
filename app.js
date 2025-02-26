import fs from "node:fs"

const prenom = process.argv[2] || "inconnu";
console.log(`Bonjour, ${prenom} ! Bienvenue dans le monde de Node.js. 🚀`);
console.log(process.argv);