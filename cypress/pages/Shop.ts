import {Gems} from '../interface/Gems';
import {Price} from '../interface/Price';

export class Shop {
  private static readonly gemPriceMapping: Array<{gems: Gems['gems'], price: Price['price']}> = [
    {gems: 5000, price: 99.99},
    {gems: 2400, price: 49.99},
    {gems: 1120, price: 24.99},
    {gems: 600, price: 14.99},
    {gems: 350, price: 9.99},
    {gems: 90, price: 2.99}
  ];

  public static extractGemsAndPrices(): Cypress.Chainable<Array<{gems: number, price: number}>> {
    return cy.get('[class*="GemCard-value"]').then((gemElements) => {
      return cy.get('[class*="GemCard-button"]').then((priceElements) => {
        const gemPricePairs: Array<{gems: number, price: number}> = [];
        gemElements.each((index, gemElement) => {
          const gemValue = parseInt(gemElement.textContent?.replace(',', '').trim() || '0', 10);
          const priceValue = parseFloat(priceElements[index]?.textContent?.replace('$', '').trim() || '0');
          gemPricePairs.push({gems: gemValue, price: priceValue});
        });

        return gemPricePairs;
      });
    });
  }

  public static validateGemPrices(): void {
    this.extractGemsAndPrices().then((extractedData) => {
      extractedData.forEach((extracted, index) => {
        const expected = this.gemPriceMapping[index];

        if (!expected) {
          cy.log(`No expected data for gem count: ${extracted.gems}`);
          throw new Error(`No expected data for gem count: ${extracted.gems}`);
        }

        cy.wrap(extracted.gems).should('eq', expected.gems);
        cy.wrap(extracted.price).should('eq', expected.price);
      });
    });
  }
}
