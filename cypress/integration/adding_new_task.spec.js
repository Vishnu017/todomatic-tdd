

describe('Adding a new task', () => {
    it('Displays the remaining/All task in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[id="new-todo-input"]')
        .type('New message');
  
      cy.get('[id="button-form"]')
        .click();
  
      cy.get('[id="new-todo-input"]')
        .should('have.value', '');
  
      cy.contains('New message');
    });
  });