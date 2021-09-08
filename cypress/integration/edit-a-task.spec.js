
describe("Editing a Task",()=>{

    it("Editing a task",()=>{

        cy.visit("http://localhost:3000")

        cy.get('[data-testid="edit-button-todo-1"]').
        click()

        cy.get('[data-testid="edit-input-todo-1"]').
        type("New Task to be completed")

        cy.get('[data-testid="save-new-todo-1"]').
        click()

        cy.contains('New Task to be completed')


    })


})