import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const filePath = path.resolve(__dirname, '../src/test.csv');

const expectedPlayers = [];

function logData(data) {
  console.log("Données lues à partir du fichier CSV :");
  data.forEach(player => console.log(player));
}

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    
    const player = {
      nom: row.nom,
      prenom: row.prenom
    };
    expectedPlayers.push(player);
  })
  .on('end', () => {
    
    logData(expectedPlayers);
  })
  .on('error', (error) => {
    console.error('Une erreur s\'est produite lors de la lecture du fichier CSV :', error);
  });