class ProductPage
{
    checkoutButton()
    {
        return cy.get('.nav-item.active').click()
    }
    checkoutSuccessButton()
    {
        return cy.get('.btn-success').click()
    }
    locationCountry()
    {
        return cy.get('#country').type('alb')
    }
    selectCountry()
    {
        return cy.get('.suggestions').click()
    }
    agreeConditions()
    {
        return cy.get('body').click()
    }
    purchaseButton()
    {
        return cy.get('.btn-lg').click()
    }
    assertMessage()
    {
        return cy.get('.alert-success').should('contain','Success!')
    }
}
export default ProductPage