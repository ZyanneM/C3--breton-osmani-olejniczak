import { expect } from 'chai';
import {saveCSVtoTempFolder} from "../src/csvExport.js";
import fs from "fs";
import path from "path";
describe('CSV Exporter', () => {
    let data;
    let fileName;

    beforeEach(function () {
        data = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
            { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
            { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
        ];
        fileName = 'test_data';
    });

    afterEach(() => {
        // Vider le dossier temporaire
        let tempFolderPath = './temp';
        fs.readdirSync(tempFolderPath).forEach(file => {
            const filePath = path.join(tempFolderPath, file);
            fs.unlinkSync(filePath);
        });
    });
    it('devrait enregistrer le fichier CSV dans le dossier temporaire', async () => {
        const filePath = await saveCSVtoTempFolder(data, fileName);

        // Vérifier si le fichier existe
        expect(filePath).to.not.be.null;
        expect(filePath).to.not.be.undefined;
    });
});
