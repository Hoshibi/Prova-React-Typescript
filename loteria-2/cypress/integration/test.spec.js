/// <reference types="cypress" />

describe('Registration', () => {
    it('Deve realizar o cadastro do Usuario', () => {

        cy.intercept(
            {
                url: 'http://127.0.0.1:3333/user/create',
                method: 'POST'
            }
        ).as('postRegister');

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type('Usuario1');
        cy.get('[data-cy="email-input"]').type(`usuario@luby.com.br`);
        // cy.get('[data-cy="email-input"]').type(`usuario${Math.random()}@luby.com.br`);
        cy.get('[data-cy="password-input"]').type('123');

        cy.get('[data-cy="btnSubmit"]').click();
        
        cy.wait('@postRegister').its('response.statusCode').should('equal', 400)
    });
    it('Erro de cadastro com email já existente', () => {

        cy.intercept(
            {
                url: 'http://127.0.0.1:3333/user/create',
                method: 'POST'
            }
        ).as('postRegister');

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type('Usuario1');
        cy.get('[data-cy="email-input"]').type('usuario@luby.com.br');
        cy.get('[data-cy="password-input"]').type('123');

        cy.get('[data-cy="btnSubmit"]').click();
        cy.wait('@postRegister').its('response.statusCode').should('equal', 400)
    });
    it('Erro de cadastro com o campo nome vazio', () => {

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type(' ');
        cy.get('[data-cy="email-input"]').type('usuario2@luby.com.br');
        cy.get('[data-cy="password-input"]').type('123');

        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Campo name vazio! Insira um nome');
    });
    it('Erro de cadastro com o campo email vazio', () => {

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type('Usuário');
        cy.get('[data-cy="email-input"]').type(' ');
        cy.get('[data-cy="password-input"]').type('123');

        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Campo email vazio! Insira um email');
    });
    it('Erro de cadastro com o campo senha vazio', () => {

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type('Usuário');
        cy.get('[data-cy="email-input"]').type('usuario2@luby.com.br');
        cy.get('[data-cy="password-input"]').type(' ');

        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Campo password vazio! Insira uma senha');
    });
    it('Erro de cadastro com todos os campos vazios', () => {

        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type(' ');
        cy.get('[data-cy="email-input"]').type(' ');
        cy.get('[data-cy="password-input"]').type(' ');

        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Todos os campos vazios! Insira os dados');
    });
    it('Erro de cadastro com o email inválido', () => {
        cy.visit('http://localhost:3000/registration');
        cy.get('[data-cy="name-input"]').type('Usuário');
        cy.get('[data-cy="email-input"]').type('usuario@luby');
        cy.get('[data-cy="password-input"]').type('123');

        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Insira um email válido. Exemplo: exemplo@luby.com.br');
    });
})