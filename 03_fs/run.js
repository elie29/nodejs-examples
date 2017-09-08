const fs = require("fs");
const path = require("path");
const rm = require('rimraf');

// Afficher coucou
const options = {encoding: 'utf-8'};
const coucou = path.resolve(__dirname, 'coucou.txt');
const jtutu = path.resolve(__dirname, 'jtutu');

console.log(coucou);

rm(jtutu, function(err) {
   if (err) throw err;

   //Créer jututu
   fs.mkdir(jtutu, (err) => {
      if (err) throw err;

      // Lire coucou.txt en mode utf8: options est optionnel si pas présente, on obtient un stream
      fs.readFile(coucou, (error, data) => {
         if (error) throw err;

         // Ecrire coucou.txt en mode utf8
         const jtutuFile = path.resolve(jtutu, 'coucou.txt');
         fs.writeFile(jtutuFile, data, options, (error) => {
            if (error) throw err;
         })
      });
    });
});

