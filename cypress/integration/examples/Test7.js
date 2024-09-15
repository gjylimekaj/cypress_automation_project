/// <reference types="cypress" />

describe('mouse hover', ()=>{
    it("describe mouse hover",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    })
})