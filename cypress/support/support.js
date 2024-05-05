require('@cypress/xpath')
Cypress.Commands.add('xpath_click', (locator) => {
    cy.xpath(locator.toString()).click()
})
Cypress.Commands.add('xpath_type', (locator, value) => {
    cy.xpath(locator.toString()).type(value.toString())
})
Cypress.Commands.add('xpath_assert_text', (locator, text) => {
    cy.xpath(locator.toString()).should('contain', text)
})

Cypress.Commands.add('xpath_existing_tag', (locator) => {
    cy.xpath(locator.toString()).should('be.visible')
})

Cypress.Commands.add('check_url', (value) => {
    cy.url().should('contain', value.toString())
})