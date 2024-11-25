import {Categories} from '../classes/Categories';

const categories = new Categories();

export class Home {
  private readonly searchButton = 'button[data-element-description="nav-search-button"]';
  private readonly searchInput = 'input[data-element-description="search-games"]';
  private readonly shopButton = 'button[data-element-description="nav-shop-button"]';

  public clickSearchButton(): void {
    cy.get(this.searchButton).click();
  }

  public verifyCategoryInSearchResults(): void {
    const games = categories.getGames();

    cy.get('#rightSideMenu').within(() => {
      games.forEach((game) => {
        this.searchForGameCategory(game.name);
        cy.get(`a[href="/${game.path}/"]`).should('contain.text', game.name);
        this.clearSearchCategoryInput();
      });
    });
  }

  public clickShopButton(): void {
    cy.get(this.shopButton).click();
  }

  public login(email: string, password: string): void {
    this.clickSignInButton();
    this.enterEmailInLoginForm(email);
    this.enterPasswordInLoginForm(password);
    this.submitCredentials();
  }

  private searchForGameCategory(categoryName: string): void {
    cy.get(this.searchInput).type(categoryName);
  }

  private clearSearchCategoryInput(): void {
    cy.get(this.searchInput).clear();
  }

  private clickSignInButton(): void {
    cy.get('button').contains('Sign in').click();
  }

  private enterEmailInLoginForm(email: string): void {
    cy.get('#email').type(email);
  }

  private enterPasswordInLoginForm(password: string): void {
    cy.get('#password').type(password);
  }

  private submitCredentials(): void {
    cy.get('button').contains('Submit').click();
  }
}
