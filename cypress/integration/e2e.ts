it('user can search for github usernames', () => {
  // visit app
  cy.visit('http://localhost:3000/')

  // should see octocat at first
  cy.findByRole('heading', { name: 'The Octocat' })
  cy.findByText('@octocat')

  // switch theme
  cy.get('.ThemeToggle-title').should('have.text', 'Dark')
  cy.findByRole('button', { name: /toggle dark mode/i }).click()
  cy.get('.ThemeToggle-title').should('have.text', 'Light')
  cy.get('html').should('have.class', 'dark')

  // search an existing username
  cy.findByPlaceholderText(/search github username/i).type('mojombo')
  cy.findByRole('button', { name: /search/i }).click()

  // should see user details
  cy.findByRole('heading', { name: 'Tom Preston-Werner' })
  cy.findByText('@mojombo')

  // search a non-existing username
  cy.findByPlaceholderText(/search github username/i)
    .clear()
    .type('sudo')
  cy.findByRole('button', { name: /search/i }).click()

  // should see "No results" error
  cy.findByText(/no results/i).should('be.visible')
})

// stop typescript from complaining
export {}
