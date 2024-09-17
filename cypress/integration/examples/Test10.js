/// <reference types="cypress" />

describe('calendar test',function(){
    it('verify date selection',function(){
        const monthNumb = "6"
        const date = "17"
        const year = "2027"
        const expectedList = [monthNumb,date,year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("a[href*='offers']").invoke('removeAttr', 'target').click()
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label__labelText--from').click()
        cy.contains('button',year).click()
        cy.get('.react-calendar__tile').eq(Number(monthNumb-1)).click()
        //cy.get('.react-calendar__tile').eq(Number(date)).click()
        cy.contains('abbr',date).click()

        //Assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>{
            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })
    })
})