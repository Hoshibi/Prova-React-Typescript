// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createPostLogin', () => { 
    cy.intercept(
        {
            url: 'http://127.0.0.1:3333/login',
            method: 'POST'
        }
    ).as('postLogin');
});

Cypress.Commands.add('createPostChangePass', () => { 
    cy.intercept( 
        { 
            url: 'http://127.0.0.1:3333/reset', 
            method: 'POST'
        } 
    ).as('postResetPass');
});

Cypress.Commands.add('login', () => {
    cy.createPostLogin();
    
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="email-input"]').type(`sayuri@luby.com.br`);
    cy.get('[data-cy="password-input"]').type('123');
    
    cy.get('[data-cy="btnSubmit"]').click();

    cy.wait('@postLogin').its('response.statusCode').should('equal', 200)   
});