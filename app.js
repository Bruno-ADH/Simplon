
const path = require('node:path');
const fs = require("node:fs");

const directoryPath = path.join(__dirname, 'data')
const filePath = path.join(directoryPath, 'info.txt')

console.log('directoryPath :>> ', directoryPath);

fs.mkdir(directoryPath, { recursive: true}, (err) => {
    if(err) {
        console.log('err :>> ', err)
        return
    };

    fs.writeFile(filePath, 'Lorem ipsum dolor', (err) => {
        if(err) {
            console.log('err :>> ', err)
            return
        };

        if(fs.existsSync(filePath)) {
            fs.stat(filePath, (err, stats) => {
                if(err) {
                    console.log('err :>> ', err)
                    return
                };
                
                if(stats.isFile()) console.log("Le fichier",path.basename(filePath) ,"a bien été créer");
                
            })
        }
    })
})
