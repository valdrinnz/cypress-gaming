import {GameNames} from '../enums/GameNames';
import {GamePaths} from '../enums/GamePaths';
import {Home} from '../pages/Home';
import {Shop} from '../pages/Shop';

const homePage = new Home();
const email = Cypress.env('email');
const password = Cypress.env('password');

describe('In the Arkadium home page', () => {
  beforeEach(() => {
    cy.goToHomePage();
  });

  const bestGames = (Object.keys(GamePaths) as Array<keyof typeof GamePaths>).map((key) => ({
    name: GameNames[key],
    path: GamePaths[key]
  }));

  it('Should verify the list of best games', () => {
    cy.clickBestGames();

    bestGames.forEach((game) => {
      cy.get(`a[href="/games/${game.path}/"]`).should('contain.text', game.name);
    });
  });

  it('Should verify search component for given categories', () => {
    homePage.clickSearchButton();
    homePage.verifyCategoryInSearchResults();
  });

  it.only('Should verify the Gem prices shown at the shop are correct.', () => {
    homePage.login(email, password);
    homePage.clickShopButton();
    Shop.validateGemPrices();
  });
});
