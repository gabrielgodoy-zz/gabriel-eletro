describe('Product details', function() {
  it('Should change to product details page', function() {
    cy.visit('http://localhost:3000');
    cy.get('.shelf-container .product').first().click({force: true});
    cy.contains('.page-title', 'Detalhes do produto');
  });

  it('Should be able to go back to home from product details page', function() {
    cy.visit('http://localhost:3000');
    cy.get('.shelf-container .product').first().click({force: true});
    cy.get('.logo').first().click({force: true});
    cy.contains('.page-title', 'Home');
  });
});
