import {expect} from 'chai';
import {exportToCSV, saveCSVtoTempFolder} from '../src/csvExport.js';
import fs from 'fs';

describe('CSV Exporter', () => {
    it('devrait exporter des données CSV correctes', () => {
        const data = [
            {name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3']},
            {name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6']},
            {name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9']},
        ];

        const attenduCSV = 'Équipe 1,Joueur 1,Joueur 2,Joueur 3\nÉquipe 2,Joueur 4,Joueur 5,' +
            'Joueur 6\nÉquipe 3,Joueur 7,Joueur 8,Joueur 9\n';
        const resultatCSV = exportToCSV(data);

        expect(resultatCSV).to.equal(attenduCSV);
    });

    it('devrait enregistrer le fichier CSV dans le dossier temporaire', () => {
        const data = [
            {name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3']},
            {name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6']},
            {name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9']},
        ];

        const fileName = 'test_data';
        const filePath = saveCSVtoTempFolder(data, fileName);

        // Vérifier si le fichier existe
        const fileExists = fs.existsSync(filePath);

        expect(fileExists).to.be.true;
    });
});
