import {GameNames} from '../enums/GameNames';
import {GamePaths} from '../enums/GamePaths';
import {Home} from '../pages/Home';

const homePage = new Home();

describe('In the Arkadium home page', () => {
  beforeEach(() => {
    cy.goToHomePage();
  });

  const bestGames = (Object.keys(GamePaths) as Array<keyof typeof GamePaths>).map((key) => ({
    name: GameNames[key],
    path: GamePaths[key]
  }));

  it.skip('Should verify the list of best games', () => {
    cy.clickBestGames();

    bestGames.forEach((game) => {
      cy.get(`a[href="/games/${game.path}/"]`).should('contain.text', game.name);
    });
  });

  it('Should verify search component for given categories', () => {
    homePage.clickSearchButton();
    homePage.searchForGameCategory('All');
    homePage.verifyCategoryInSearchResults();
  });
});
