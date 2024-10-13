const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../../pageObjects/HomePage"
import ProductPage from "../../../pageObjects/ProductPage"

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open eCommerce page',()=>
{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})
When('I add items to Cart',function(){
    homePage.getShopTab().click()
    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    });
    productPage.checkoutButton()
})

Then('Validate the total prices',()=>
{
    productPage.sumOfProducts()
    productPage.totalSum()
})
Then('select the country submit and verify Thankyou',()=>
{
    productPage.checkoutSuccessButton()
    productPage.locationCountry()
    productPage.selectCountry()
    productPage.agreeConditions()
    productPage.purchaseButton()
    productPage.assertMessage()
})

//When I fill the form details
When('I fill the form details',function(dataTable)
{
    this.data = {}
    const name = dataTable.rawTable[1][0]
    const gender = dataTable.rawTable[1][1]
    this.data.name = name
    homePage.getEditBox().type(name)
    homePage.getGender().select(gender)
})

Then('Validate the forms behaviour',function()
{
    const name = this.data.name
    cy.get('.ng-pristine:nth-child(1)').should('have.value',name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
})

Then('select the Shop Page',()=>
{
    homePage.getShopTab().click()
})