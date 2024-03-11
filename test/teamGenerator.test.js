import { expect } from "chai";
import TeamGenerator from "../src/teamGenerator.js";

describe("TeamGenerator", () => {
  it("Devrait générer les équipes avec le bon nombre de joueurs dans chaque équipe", () => {
    // Préparation des données de test
    const players = [
      "Joueur 1",
      "Joueur 2",
      "Joueur 3",
      "Joueur 4",
      "Joueur 5",
      "Joueur 6",
    ];
    const playersPerTeam = 3;

    const teamGenerator = new TeamGenerator(players, playersPerTeam);

    expect(teamGenerator.players).to.be.an("array");
    expect(teamGenerator.players).to.not.be.empty;
    expect(playersPerTeam).to.be.a("number");
    expect(playersPerTeam).to.be.above(0);

    teamGenerator.generateTeams();

    const teams = teamGenerator.getTeams();

    expect(teams).to.be.an("array");

    teams.forEach((team) => {
      expect(team.players).to.be.an("array");
      expect(team.players.length).to.equal(playersPerTeam);
    });
  });

  it("Devrait avoir le bon typage des données dans TeamGenerator", () => {
    // Préparation des données de test
    const players = [
      "Joueur 1",
      "Joueur 2",
      "Joueur 3",
      "Joueur 4",
      "Joueur 5",
      "Joueur 6",
    ];
    const playersPerTeam = 3;

    const teamGenerator = new TeamGenerator(players, playersPerTeam);

    expect(teamGenerator.players).to.be.an("array");
    expect(teamGenerator.players).to.not.be.empty;
    expect(playersPerTeam).to.be.a("number");
    expect(playersPerTeam).to.be.above(0);
  });

});
