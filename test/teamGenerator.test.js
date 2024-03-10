import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
  it('Devrait générer les équipes avec le bon nombre de joueurs dans chaque équipe', () => {
    const players = ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6'];
    const playersPerTeam = 3;
    const teamGenerator = new TeamGenerator(players, playersPerTeam);
    teamGenerator.generateTeams();

    const teams = teamGenerator.getTeams();

    expect(teams.length).to.equal(Math.ceil(players.length / playersPerTeam));

    teams.forEach(team => {
        expect(team.players.length).to.equal(playersPerTeam);
      });
  });
});
