

describe("Deleting a task ",()=>{

    it("Displaying all task and also the one that needs to be deleted",()=>{


        cy.visit('http://localhost:3000');

        cy.get('[data-testid="delete-button-todo-1"]').
        click()

        cy.get('[data-testid="todo-list"]').should('not.contain',"edited Task" )
    })


}) 