class HomePage
{
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBinding()
        {
            return cy.get(':nth-child(4) > .ng-untouched')
        }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
    getShopTab()
    {
        return cy.get('a[href*="shop"]')
    }
}
export default HomePage

//20 february 2025.. jusdt testinggg