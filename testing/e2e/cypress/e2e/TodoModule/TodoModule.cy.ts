describe('Todo Module tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Todo', () => {
    it('should properly follow Todo CRUD flow', () => {
      cy.get('#todo-input').should('be.visible').should('have.value', '')
      cy.contains(/^ADD NEW TODO$/)
        .should('be.visible')
        .should('be.disabled')

      const todoContent = 'Sample todo'
      cy.get('#todo-input').type(todoContent)
      cy.contains(/^ADD NEW TODO$/)
        .should('not.be.disabled')
        .click()

      cy.contains(todoContent)
        .should('be.visible')
        .click()
        .should(
          'have.css',
          'text-decoration',
          'line-through solid rgb(0, 0, 0)',
        )

      cy.get('.sc-hLBbgP').click()
      cy.contains(todoContent).should('not.exist')

      cy.get('#todo-input').type(todoContent)
      cy.contains(/^ADD NEW TODO$/)
        .should('not.be.disabled')
        .click()

      cy.contains(/^EDIT$/).click()
      cy.get(`input[value="${todoContent}"]`)
      cy.contains(/^EDIT$/).should('not.exist')
      cy.get('.sc-hLBbgP').should('not.exist')
      cy.contains(/^SAVE$/).should('exist')

      cy.get(`input[value="${todoContent}"]`).clear()
      cy.contains(/^SAVE$/).should('be.disabled')

      const newTodoContent = 'Sample content 2'
      cy.get(`input[value="${todoContent}"]`).type(newTodoContent)
      cy.contains(/^SAVE$/)
        .should('not.be.disabled')
        .click()
      cy.contains(newTodoContent).should('exist')
      cy.contains(/^EDIT$/).should('exist')
      cy.get('.sc-hLBbgP').should('exist')
    })
  })
})
