/// <reference types="cypress" />
import { parse } from 'csv-parse'; // Import the synchronous version of csv-parse

let productName;

describe('My JWT session test', () => {

    it('is logged in through local storage', () => {
        cy.LoginAPI().then(function() {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function(window) {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });

        // Capture the product name
        cy.get('.card-body b').eq(0).then(function(ele) {
            productName = ele.text();
        });

        cy.get('.card-body button:last-of-type').eq(0).click();
        cy.get('[routerlink*="cart"]').click();
        cy.contains("Checkout").click();
        cy.get('.form-group').type("alb");
        cy.get('.ta-results button').each(($el) => {
            if ($el.text() === " Albania") {
                cy.wrap($el).click();
            }
        });
        cy.get('.btnn').click();
        cy.wait(2000);
        cy.get('.btn.btn-primary.mt-3.mb-3').first().click();
        cy.wait(2000);

        // Read and parse the CSV file
        cy.readFile('C:/Users/gjyli/vscode-projects/cypress_automation_project/cypress/downloads/order-invoice_gjylimekaj1.csv')
            .then((text) => {
                // Parse the CSV text synchronously
                const records = parse(text, { columns: true });
                
                console.log(records);

                // Extract the product name from the parsed CSV data
                const actualProductCSV = records[0]["Product Name"];
                expect(productName).to.equal(actualProductCSV);
            });
    });
});
