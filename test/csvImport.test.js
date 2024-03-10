import fs from 'fs';
import path from 'path';
import CSVReader from '../src/csvReader'; 
import { expect } from 'chai';

describe('CSVReader', () => {
  describe('readCSV', () => {
    it("devrait lire le fichier CSV et retourner les données sous forme d'un tableau d'objets", (done) => {
      const filePath = path.resolve(__dirname, '../src/test.csv');
      const csvReader = new CSVReader(filePath);

      const expectedPlayers = [
        { nom: 'Uzumaki', prenom: 'Naruto' },
        { nom: 'Uchiha', prenom: 'Sasuke' },
        { nom: 'Haruno', prenom: 'Sakura' },
        { nom: 'Hatake', prenom: 'Kakashi' },
        { nom: 'Nara', prenom: 'Shikamaru' },
        { nom: 'Hyuga', prenom: 'Hinata' },
        { nom: 'Hyuga', prenom: 'Neji' },
        { nom: 'Lee', prenom: 'Rock' },
        { nom: 'Tenten', prenom: '' },
        { nom: 'Yamanaka', prenom: 'Ino' },
        { nom: 'Akimichi', prenom: 'Choji' },
        { nom: 'Inuzuka', prenom: 'Kiba' }
      ];

      csvReader.readCSV()
      .then((data) => {
        expect(data).to.be.an('array').that.is.not.empty;
        data.forEach(item => expect(item).to.be.an('object'));
        data.forEach((player, index) => {
            expect(player).to.deep.equal(expectedPlayers[index]);
          });
        done();
      })
      .catch(done);
  });
});
});