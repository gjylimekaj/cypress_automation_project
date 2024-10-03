/// <reference types="cypress" />

describe('Web Table Example',()=>{
    it('should handle web tables',()=>{
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each(($el,index,$list)=>{
            const text = $el.text()
            if(text.includes('Python'))
            {
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })


            }
        })
    })
})