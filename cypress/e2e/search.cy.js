describe("Search keyword", () => {
    beforeEach(() => {
        cy.open_page()
    })

    it("search items based on the keyword", () => {
        cy.xpath_type(`//*[@name='searchTerm']`, 'Bank')
        cy.press_button('enter')
        cy.find_keyword('Bank')
    })
})