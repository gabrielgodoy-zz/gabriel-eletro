describe('Shelf of products', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000');
  })

  it('Should change products numbers', function() {
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.product').should('have.length', 3);
  });

  it('Should change to a minimum of one product in a shelf', function() {
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.product').should('have.length', 1);
  });
});
