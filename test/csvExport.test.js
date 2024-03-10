import { expect } from 'chai';
import {saveCSVtoTempFolder} from "../src/csvExport.js";

describe('CSV Exporter', () => {
    it('devrait enregistrer le fichier CSV dans le dossier temporaire', async () => {
        const data = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
            { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
            { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
        ];

        const fileName = 'test_data';
        const filePath = await saveCSVtoTempFolder(data, fileName);

        // Vérifier si le fichier existe
        expect(filePath).to.not.be.null;
        expect(filePath).to.not.be.undefined;

    });
});
