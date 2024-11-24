import {GameNames} from '../enums/GameNames';
import {GamePaths} from '../enums/GamePaths';

describe('In the Arkadium home page', () => {
  const bestGames = (Object.keys(GamePaths) as Array<keyof typeof GamePaths>).map((key) => ({
    name: GameNames[key],
    path: GamePaths[key]
  }));

  it('Should verify the list of best games', () => {
    cy.goToHomePage();
    cy.clickBestGames();

    bestGames.forEach((game) => {
      cy.get(`a[href="/games/${game.path}/"]`).should('contain.text', game.name);
    });
  });
});
