/// <reference types="cypress" />

describe('Handling child windows', function(){
    it('handle child window', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com',()=>{
            cy.get('#navbarSupportedContent a[href*="blog"').click()
            cy.get('.wp-block-heading').should('contain','Mindblown: a blog about philosophy.')
        })
    })
})