/// <reference types="cypress" />

describe('My second test suite', function(){
    it('My second test case', function(){
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator')
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
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})