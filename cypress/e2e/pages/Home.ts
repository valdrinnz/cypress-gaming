export class Home {
  private readonly searchButton = 'button[data-element-description="nav-search-button"]';
  private readonly searchInput = 'input[data-element-description="search-games"]';

  public clickSearchButton(): void {
    cy.get(this.searchButton).click();
  }

  public searchForGameCategory(categoryName: string): void {
    cy.get(this.searchInput).type(categoryName);
  }

  public verifyCategoryInSearchResults(): void {

  }
}
