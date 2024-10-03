/// <reference types="cypress" />

describe('mouse hover', ()=>{
    it("describe mouse hover",()=>{
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
    })
})