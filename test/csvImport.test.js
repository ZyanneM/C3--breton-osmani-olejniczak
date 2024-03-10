import fs from 'fs';
import path from 'path';
import CSVReader from '../src/csvReader'; 
import { expect } from 'chai';

describe('CSVReader', () => {
  describe('readCSV', () => {
    it("devrait lire le fichier CSV et retourner les données sous forme d'un tableau d'objets", (done) => {
      const filePath = path.resolve(__dirname, '../src/test.csv');
      const csvReader = new CSVReader(filePath);
    });
});
});