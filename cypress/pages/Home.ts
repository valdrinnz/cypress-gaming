import {Categories} from '../classes/Categories';

const categories = new Categories();

export class Home {
  private readonly searchButton = 'button[data-element-description="nav-search-button"]';
  private readonly searchInput = 'input[data-element-description="search-games"]';

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

  private searchForGameCategory(categoryName: string): void {
    cy.get(this.searchInput).type(categoryName);
  }

  private clearSearchCategoryInput(): void {
    cy.get(this.searchInput).clear();
  }
}
