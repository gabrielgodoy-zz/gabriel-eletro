describe('Product details', function() {
  it('Should change to product details page', function() {
    cy.visit('http://localhost:3000');
    cy.get('.shelf-container .product').first().click({force: true});
    cy.get('.page-title').contains('Detalhes do produto');
  });
});
