require('@cypress/xpath')
Cypress.Commands.add('xpath_click', (locator) => {
    cy.xpath(locator.toString()).click()
})
Cypress.Commands.add('xpath_type', (locator, value) => {
    cy.xpath(locator.toString()).type(value.toString())
})
Cypress.Commands.add('xapth_assert_text', (locator, text) => {
    cy.xpath(locator.toString()).should('contain', text)
})