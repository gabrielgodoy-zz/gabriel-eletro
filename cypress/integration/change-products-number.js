describe('Shelf of products', function() {
  it('Should change products numbers', function() {
    cy.visit('http://localhost:3000');
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.btn-decrease').click();
    cy.get('.shelf-container').first().find('.product').should('have.length', 3);
  });
  
  it('Should change to a minimum of one product in a shelf', function() {
    cy.visit('http://localhost:3000');
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
