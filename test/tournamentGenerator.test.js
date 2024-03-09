const {assert} = import("chai");
const expect = import('chai').expect;
import TournamentGenerator from '../src/tournamentGenerator.js';

describe('TournamentGenerator', () => {
    test('devrait générer des poules avec le nombre correct de teams', () => {
        // Préparer une liste fictive d'équipes
        const teams = [
            { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
            { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
            { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
            { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] },
            { name: 'Équipe 5', players: ['Joueur 13', 'Joueur 14', 'Joueur 15'] },
            { name: 'Équipe 6', players: ['Joueur 16', 'Joueur 17', 'Joueur 18'] },
            { name: 'Équipe 7', players: ['Joueur 19', 'Joueur 20', 'Joueur 21'] },
            { name: 'Équipe 8', players: ['Joueur 22', 'Joueur 23', 'Joueur 24'] },
        ];
        // Je crée une instance de TournamentGenerator avec ces équipes
        const tournamentGenerator = new TournamentGenerator(teams);
        tournamentGenerator.generatePoules(); // Générer les poules

        // Je vérifie que chaque poule contient exactement 4 équipes
        const poules = tournamentGenerator.poules;
        expect(poules.length).toBeGreaterThan(0); // Assurez-vous d'abord qu'il y a des poules
        poules.forEach(poule => {
            expect(poule.length).toBe(4);
        });
    });
});
