describe('Login application', () => {
    beforeEach(() => {
        cy.open_page()
    })
    it('Login successfully', () => {
        cy.xpath_click('//button[normalize-space(.)="Signin"]')
        cy.fill_login_info('username', 'password')
        cy.xpath_click(`//*[@type='submit']`)
        cy.open_page()
        cy.xapth_assert_text(`//*[@id='settingsBox']//i[@class='icon-user']//ancestor::a[@class='dropdown-toggle']`, 'username')
    })
})