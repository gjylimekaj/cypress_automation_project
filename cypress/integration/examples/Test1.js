/// <reference types="cypress" />

describe('My first test suite', function(){
    it('My first test case', function(){
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('hello wolrd!!!!')
        })
        //$el: The current element being processed in the collection. This is a wrapped jQuery object, so you can use jQuery methods on it.
        //index: The index of the current element in the collection, starting from 0.
        //$list: The entire list of elements as a jQuery object array.
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).find('button').click()
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        //this is to print in logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        //cy.log(logo.text())
    })
})