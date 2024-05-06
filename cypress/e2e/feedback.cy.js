describe("Send feedback", () => {
    beforeEach(() => {
        cy.open_page()
    })

    it("Send feedback to the admin", () => {
        cy.xpath_click(`//*[@id='nav']//*[@id='pages-nav']//*[text()='Feedback']//ancestor::li`)
        cy.check_url('feedback.html')
        cy.xpath_assert_text('//h3', 'Feedback')
        cy.xpath_type("//input[@placeholder='Your Name']", 'Quoc Bao')
        cy.xpath_type("//input[@placeholder='Your email address']", 'nqb@gmail.com')
        cy.xpath_type("//input[@placeholder='Subject']", 'example')
        cy.xpath_type('//*[contains(@placeholder,"Type your questions here")]', 'Example message')
        cy.xpath_click('//*[contains(@type,"submit")]')
        cy.check_url('sendFeedback.html')
    })
})