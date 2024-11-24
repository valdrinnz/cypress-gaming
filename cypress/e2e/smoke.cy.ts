describe('In the Arkadium home page', () => {
  const bestGames = [
    {
      name: 'Who Wants to Be a Millionaire?',
      path: 'millionaire'
    },
    {
      name: 'Arkadium\'s Bubble Shooter',
      path: 'bubble-shooter'
    },
    {
      name: 'Family Feud',
      path: 'family-feud'
    },
    {
      name: 'Arkadium Word Wipe Game',
      path: 'word-wipe'
    },
    {
      name: 'Solitaire Kitchen: Tripeaks Cooking Adventure',
      path: 'solitaire-kitchen'
    },
    {
      name: 'Outspell Spelling Game',
      path: 'outspell'
    },
    {
      name: 'Crystal Collapse',
      path: 'crystal-collapse'
    },
    {
      name: 'Mahjongg Solitaire',
      path: 'mahjongg-solitaire'
    },
    {
      name: 'The Price Is Right Plinko Pegs',
      path: 'price-is-right-plinko'
    },
    {
      name: 'Block Champ',
      path: 'block-champ'
    },
    {
      name: 'Lumeno',
      path: 'lumeno'
    },
    {
      name: '8 Ball Pool',
      path: 'free-8-ball-pool'
    },
    {
      name: 'Klondike Solitaire',
      path: 'klondike-solitaire'
    },
    {
      name: 'Mahjongg Dimensions Blue',
      path: 'mahjongg-dimensions-blue'
    },
    {
      name: 'Mahjongg Candy',
      path: 'mahjongg-candy'
    },
    {
      name: 'Jewel Shuffle',
      path: 'jewel-shuffle'
    },
    {
      name: 'Free Online Bridge',
      path: 'bridge'
    },
    {
      name: 'Freecell Solitaire',
      path: 'free-freecell-solitaire'
    },
    {
      name: 'Card Sharks',
      path: 'card-sharks'
    },
    {
      name: 'Free Online Daily Crossword Puzzle',
      path: 'daily-crossword'
    },
    {
      name: 'Crystal Collapse Odyssey',
      path: 'crystal-collapse-odyssey'
    },
    {
      name: 'Crystal Collapse Summer Nights',
      path: 'crystal-collapse-summer-nights'
    }
  ] as const;

  it('Should verify the list of best games', () => {
    cy.visit('/');
    cy.get('[data-testid="Best"]').click();

    bestGames.forEach((game) => {
      const hrefPath = `/games/${game.path}/`;
      cy.get(`a[href="${hrefPath}"]`).should('contain', game.name);
    });
  });
});
