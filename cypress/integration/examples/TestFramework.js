/// <reference types="cypress" />

describe('Hooks Function',()=>{
    before(function(){
        // runs once before all tests
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('shows some example using different methods',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get('.ng-pristine:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('a[href*="shop"]').click()
        cy.get('h4.card-title').each(($el,index,$list)=>{
            if($el.text().includes('Blackberry')){
                cy.get('.btn-info').eq(index).click()
            }
        })
    })
})