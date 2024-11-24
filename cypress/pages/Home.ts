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
    const games = [
      {
        name: 'All',
        path: 'free-online-games',
      },
    ];
  
    cy.get('#rightSideMenu').within(() =>{
        games.forEach((game) => {
            cy.get(`a[href="/${game.path}/"]`).should('contain.text', game.name);
          });
    })

  }
}
