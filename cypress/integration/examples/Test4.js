/// <reference types="cypress" />

describe('My fourth test',function(){
    it('Handle Alerts',function(){
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('#alertbtn').click()   
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
            {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })
    })
})