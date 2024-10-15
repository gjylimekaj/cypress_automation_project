/// <reference types="cypress" />

describe('mock http responses', function(){

it('is a simple test',function()
{
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    //this method we can use if we want to mock the response
    //requestobject - method call and url
    //responseobject - status code and body
    cy.intercept({
        method: 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }, 
    {
        statusCode : 200,
        body: [
            {
                "book_name": "RestAssured with Java",
                "isbn": "BSG",
                "aisle": "2302"
            }
        ]
    }).as('bookretrievals')
    cy.get('.btn-primary').click()
    cy.wait('@bookretrievals').then(({request,response})=>{
        cy.get('tr').should('have.length',response.body.length+1)

    })
    cy.get('p').should('have.text','Oops only 1 Book available')

    //length of the response array = rows of the table

})


})