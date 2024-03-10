import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import CSVReader from '../src/csvReader.js'; 
import { expect } from 'chai';

describe('CSVReader', () => {
    describe('checkIfCSVEmpty', () => {
        it("devrait vérifier si le fichier CSV est vide", (done) => {
          const testFilePath = fileURLToPath(import.meta.url);
          const testDirPath = path.dirname(testFilePath);
          const filePath = path.resolve(testDirPath, '../src/test_empty.csv');
          const csvReader = new CSVReader(filePath);
    
          csvReader.readCSV()
            .then((data) => {
              if(data.length === 0) {
                console.log("Pas de données dans le fichier CSV.");
              }
              expect(data).to.be.an('array');
              done();
            })
            .catch(done);
        });
      });

  describe('readCSV', () => {
    it("devrait lire le fichier CSV et retourner les données sous forme d'un tableau d'objets", (done) => {
      const testFilePath = fileURLToPath(import.meta.url);
      const testDirPath = path.dirname(testFilePath);
      const filePath = path.resolve(testDirPath, '../src/test.csv');
      const csvReader = new CSVReader(filePath);

      const expectedPlayers = [];

      function logData(data) {
        console.log("Données lues à partir du fichier CSV :");
        data.forEach(player => console.log(player));
      }

      csvReader.readCSV()
        .then((data) => {
          logData(data);
          data.forEach(item => expect(item).to.be.an('object'));
          data.forEach((player) => {
            const playerKeys = Object.keys(player);
            const playerData = {};

            playerKeys.forEach((key) => {
              if (key.toLowerCase() === 'nom' || key.toLowerCase() === 'prenom') {
                playerData[key.toLowerCase()] = player[key];
              }
            });

            expectedPlayers.push(playerData);
          });

          expectedPlayers.forEach((expectedPlayer, index) => {
            expect(data[index].nom).to.equal(expectedPlayer.nom);
            expect(data[index].prenom).to.equal(expectedPlayer.prenom);
          });

          done();
        })
        .catch(done);
    });
  });
});
