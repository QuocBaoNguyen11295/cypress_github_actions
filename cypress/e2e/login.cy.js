describe('Login application', () => {
    beforeEach(() => {
        cy.open_page()
        cy.xpath_click('//button[normalize-space(.)="Signin"]')
    })
    it('Login successfully', () => {
        cy.fill_login_info('username', 'password')
        cy.xpath_click(`//*[@type='submit']`)
        cy.open_page()
        cy.xpath_assert_text(`//*[@id='settingsBox']//i[@class='icon-user']//ancestor::a[@class='dropdown-toggle']`, 'username')
    })
    it('Login unsuccessfully', () => {
        cy.fill_login_info('username1', 'password')
        cy.xpath_click(`//*[@type='submit']`)
        cy.xpath_existing_tag(`//*[@class='alert alert-error']`)
        cy.xpath_assert_text(`//*[@class='alert alert-error']`, 'Login and/or password are wrong.')
    })

    it('Forget password', () => {
        cy.xpath_click(`//*[text()='Forgot your password ?']`)
        cy.check_url('forgot-password.html')
        cy.xpath_assert_text('//h3', 'Forgotten Password')
        cy.xpath_type(`//input[@name='email']`, 'nqb@gmail.com')
        cy.xpath_click(`//input[@value='Send Password']`)
        cy.check_url(`forgotten-password-send.html`)
        cy.xpath_assert_text(`//*[text()='Forgotten Password']//ancestor::div[@class='offset3 span6']`, `Your password will be sent to the following email: nqb@gmail.com`)
    })
})