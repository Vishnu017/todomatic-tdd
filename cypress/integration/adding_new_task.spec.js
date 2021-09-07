

describe('Adding a new task', () => {
    it('Displays the remaining/All task in the list', () => {
      cy.visit('http://localhost:3001');
  
      cy.get('[id="new-todo-input"]')
        .type('New message');
  
      cy.get('[id="sumbit-add"]')
        .click();
  
      cy.get('[id="new-todo-input"]')
        .should('have.value', '');
  
      cy.get('[id="list"]').contains('New message');
    });
  });