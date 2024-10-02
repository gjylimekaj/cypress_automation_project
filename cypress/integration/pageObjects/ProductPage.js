class ProductPage
{
    checkoutButton()
    {
        return cy.get('.nav-item.active').click()
    }
    sumOfProducts()
    {
        var sum = 0
        return cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            sum = Number(sum)+Number(result)
        }).then(function(){
            cy.log(sum)
            return cy.wrap(sum)
        })
    }
    totalSum()
    {
        this.sumOfProducts().then((sum) => {
        return cy.get('h3 strong').then(function(element){
            element.text()
            const amount = element.text()
            var result = amount.split(" ")
            var total = result[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        })
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
        return cy.get('#checkbox2').click({force:true})
    }
    purchaseButton()
    {
        return cy.get('input[type="submit"]').click()
    }
    assertMessage()
    {
        //return cy.get('.alert-success').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        return cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    }
}
export default ProductPage