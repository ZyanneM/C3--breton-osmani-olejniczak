import { expect } from 'chai';
import { exportToCSV } from '../src/csvExport.js';

describe('CSV Exporter', () => {
    it('devrait exporter un tableau vide en une chaîne vide', () => {
        const equipes = [];
        const csv = exportToCSV(equipes);
        expect(csv).to.equal('');
    });
});
