/// <reference types="cypress" />

describe('mock http responses', function(){

    it('is a simple test',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        //this is if we want to mock our request
        //method, url, routeHandler 
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>
        {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
            //method continue means the request is being sent to the server
            req.continue((res)=>
            {
                //expect(res.statusCode).to.equal(403)
            })
    }).as("dummyUrl")
    cy.get('.btn-primary').click()
    cy.wait("@dummyUrl")
    
    })
    
    
    })