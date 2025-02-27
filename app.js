
const path = require('node:path');
const fs = require("node:fs");

const directoryPath = "C:/Users/Bruno/Documents/Simplon/learnJs"

fs.stat(directoryPath, (err, stats) => {
    if(err) console.erro('err :>> ', err);
    if(stats.isDirectory()){
        fs.readdir(directoryPath, (err, stats) => {
            if(err) console.erro('err :>> ', err);
            console.log('stats :>> ', stats);
            stats.forEach((file) => console.log('file.extname() >> ', path.extname(file)))
        })
    }
})
