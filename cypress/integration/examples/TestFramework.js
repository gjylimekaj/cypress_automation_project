/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"
describe('Hooks Function',()=>{
    before(function(){
        // runs once before all tests
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('shows some example using different methods',function(){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        cy.get('.ng-pristine:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });
        productPage.checkoutButton()
        // var sum = 0
        // cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{
        //     const amount = $el.text()
        //     var result = amount.split(" ")
        //     result = result[1].trim()
        //     sum = Number(sum)+Number(result)
        // }).then(function(){
        //     cy.log(sum)
        // })
        productPage.sumOfProducts()
        productPage.totalSum()
        // cy.get('h3 strong').then(function(element){
        //     element.text()
        //     const amount = element.text()
        //     var result = amount.split(" ")
        //     var total = result[1].trim()
        //     expect(Number(total)).to.equal(sum)
        // })
        productPage.checkoutSuccessButton()
        productPage.locationCountry()
        productPage.selectCountry()
        productPage.agreeConditions()
        productPage.purchaseButton()
        productPage.assertMessage()
    })
})