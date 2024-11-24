describe('In the Arkadium home page', () => {

  it('Should verify the list of best games', () => {
      cy.visit('/')
      cy.get('[data-testid="Best"]').click();
  });
});
