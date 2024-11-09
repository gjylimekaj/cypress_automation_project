/// <reference types="cypress" />
//import { parse } from 'csv-parse';
//const neatCSV = require('neat-csv')
import neatCSV from 'neat-csv';

let productName

describe('My JWT session test', ()=>{

    it('is logged in through local storage',async()=>{
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',
                {
                    onBeforeLoad : function(window)
                    {
                        window.localStorage.setItem('token',Cypress.env('token'))
                    }
                })
        })
        cy.get('.card-body b').eq(0).then(function(ele){
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').eq(0).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains("Checkout").click()
        cy.get('.form-group').type("alb")
        cy.get('.ta-results button').each(($el,index,$list)=>{
            if($el.text()===" Albania"){
                cy.wrap($el).click()
            }
        })
        cy.get('.btnn').click()
        cy.wait(2000)
        cy.get('.btn.btn-primary.mt-3.mb-3').first().click(); 
        cy.wait(2000)
        //THIS IS THE CODE WHEN IAM USING NEAT-CSV
    //cy.readFile(Cypress.config("fileServerFolder")+"cypress/downloads/order-invoice_gjylimekaj1.csv")
    cy.readFile('C:/Users/gjyli/vscode-projects/cypress_automation_project/cypress/downloads/order-invoice_gjylimekaj1.csv')
    .then(async(text)=>{
        const csv =  await neatCSV(text)

        console.log(csv)
    
        const actualProductCSV = csv[0]["Product Name"]
    
        expect(productName).to.equal(actualProductCSV)
    })
    })
})