/// <reference types="cypress" />

describe('My first test suite', function(){
    it('My first test case', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
    })
})