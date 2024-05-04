// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
var baseUrl = 'http://zero.webappsecurity.com/'
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('open_page', () => {
    cy.visit(baseUrl)
})
Cypress.Commands.add('fill_login_info', (username, password) => {
    cy.xpath_type(`//input[@name='user_login']`, username)
    cy.xpath_type(`//input[@name='user_password']`, password)
})
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })