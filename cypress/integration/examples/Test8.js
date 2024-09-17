/// <reference types="cypress" />

describe('child windows example', ()=>{
    it('should handle child windows',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get('.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
})