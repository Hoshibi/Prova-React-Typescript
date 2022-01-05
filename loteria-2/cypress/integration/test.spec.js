/// <reference types="cypress" />

// describe('Registration', () => {
//     it('Deve realizar o cadastro do Usuario', () => {

//         cy.intercept(
//             {
//                 url: 'http://127.0.0.1:3333/user/create',
//                 method: 'POST'
//             }
//         ).as('postRegister');

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').type('Usuario1');
//         cy.get('[data-cy="email-input"]').type(`usuario@luby.com.br`);
//         // cy.get('[data-cy="email-input"]').type(`usuario${Math.random()}@luby.com.br`);
//         cy.get('[data-cy="password-input"]').type('123');

//         cy.get('[data-cy="btnSubmit"]').click();
        
//         cy.wait('@postRegister').its('response.statusCode').should('equal', 400)
//     });
//     it('Erro de cadastro com email já existente', () => {

//         cy.intercept(
//             {
//                 url: 'http://127.0.0.1:3333/user/create',
//                 method: 'POST'
//             }
//         ).as('postRegister');

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').type('Usuario1');
//         cy.get('[data-cy="email-input"]').type('usuario@luby.com.br');
//         cy.get('[data-cy="password-input"]').type('123');

//         cy.get('[data-cy="btnSubmit"]').click();
//         cy.wait('@postRegister').its('response.statusCode').should('equal', 400)
//     });
//     it('Erro de cadastro com o campo nome vazio', () => {

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').should('not.have.value');
//         cy.get('[data-cy="email-input"]').type('usuario2@luby.com.br');
//         cy.get('[data-cy="password-input"]').type('123');

//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo name vazio! Insira um nome');
//     });
//     it('Erro de cadastro com o campo email vazio', () => {

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').type('Usuário');
//         cy.get('[data-cy="email-input"]').should('not.have.value');
//         cy.get('[data-cy="password-input"]').type('123');

//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo email vazio! Insira um email');
//     });
//     it('Erro de cadastro com o campo senha vazio', () => {

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').type('Usuário');
//         cy.get('[data-cy="email-input"]').type('usuario2@luby.com.br');
//         cy.get('[data-cy="password-input"]').should('not.have.value');

//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo password vazio! Insira uma senha');
//     });
//     it('Erro de cadastro com todos os campos vazios', () => {

//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').should('not.have.value');
//         cy.get('[data-cy="email-input"]').should('not.have.value');
//         cy.get('[data-cy="password-input"]').should('not.have.value');

//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Todos os campos vazios! Insira os dados');
//     });
//     it('Erro de cadastro com o email inválido', () => {
//         cy.visit('http://localhost:3000/registration');
//         cy.get('[data-cy="name-input"]').type('Usuário');
//         cy.get('[data-cy="email-input"]').type('usuario@luby');
//         cy.get('[data-cy="password-input"]').type('123');

//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Insira um email válido. Exemplo: exemplo@luby.com.br');
//     });
// })

// describe('Login', () => {
//     it('Deve realizar o login do usuário', () => {
//         cy.createPostLogin();
    
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').type(`sayuri@luby.com.br`);
//         cy.get('[data-cy="password-input"]').type('123');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.wait('@postLogin').its('response.statusCode').should('equal', 200)    
//     });
//     it('Erro no login com email errado', () => {
//         cy.createPostLogin();
    
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').type(`sayuri_errado@luby.com.br`);
//         cy.get('[data-cy="password-input"]').type('123');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.wait('@postLogin').its('response.statusCode').should('equal', 401)  
//         cy.get('.Toastify__toast--error').should('have.text','E-mail e/ou senhas incorretas!');
    
//     });
//     it('Erro no login com todos os campos vazios', () => {
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').should('not.have.value');
//         cy.get('[data-cy="password-input"]').should('not.have.value');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Todos os campos vazios! Insira os dados');
//     });
//     it('Erro no login com o campo email vazio', () => {
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').should('not.have.value');
//         cy.get('[data-cy="password-input"]').type('123');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo email vazio! Insira um email');
//     });
//     it('Erro no login com o campo senha vazio', () => {
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').type('sayuri@luby.com.br');
//         cy.get('[data-cy="password-input"]').should('not.have.value');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo password vazio! Insira uma senha');
//     });
//     it('Erro no login com o formato do email inválido', () => {
//         cy.visit('http://localhost:3000/');
//         cy.get('[data-cy="email-input"]').type('sayuri@luby');
//         cy.get('[data-cy="password-input"]').type('123');
    
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Insira um email válido. Exemplo: exemplo@luby.com.br');
//     });
// })

// describe('Change Password', () => {
//     it('Deve alterar a senha', () => {
//         cy.createPostChangePass();
    
//         cy.visit('http://localhost:3000/reset-password');
//         cy.get('[data-cy="email-input"]').type(`sayuri@luby.com.br`);
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.wait('@postResetPass').then((xhr) => {
//             expect(xhr.response.statusCode).be.eq(200);

//             cy.intercept( { url: `http://127.0.0.1:3333/reset/${xhr.response.body.token}`, method: 'POST'} ).as('postChangePass');
//             cy.get('[data-cy="password-input"]').type(`123`);
//             cy.get('[data-cy="btnSubmit"]').click();

//             cy.wait('@postChangePass').then((xhr) => {
//                 expect(xhr.response.statusCode).be.eq(200);
//             }) 
//         }) 
//     });
//     it('Erro ao solicitar mudança de senha: Campo email vazio', () => {
//         cy.visit('http://localhost:3000/reset-password');
//         cy.get('[data-cy="email-input"]').should('not.have.value');
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Campo email vazio! Insira um email');
//     });
//     it('Erro ao solicitar mudança de senha: E-mail inválido', () => {
//         cy.visit('http://localhost:3000/reset-password');
//         cy.get('[data-cy="email-input"]').type('sayuri@luby');
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.get('.Toastify__toast--warning').should('have.text','Insira um email válido. Exemplo: exemplo@luby.com.br');
//     });
//     it('Erro ao solicitar mudança de senha: E-mail inexistente', () => {
//         cy.createPostChangePass();
    
//         cy.visit('http://localhost:3000/reset-password');
//         cy.get('[data-cy="email-input"]').type(`sayuri_error@luby.com.br`);
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.wait('@postResetPass').then((xhr) => {
//             expect(xhr.response.statusCode).be.eq(404);
//         }) 
//         cy.get('.Toastify__toast--error').should('have.text','Não há cadastro com esse e-mail');
//     });
//     it('Erro ao realizar a mudança de senha: Campo senha vazio', () => {
//         cy.createPostChangePass();
    
//         cy.visit('http://localhost:3000/reset-password');
//         cy.get('[data-cy="email-input"]').type(`sayuri@luby.com.br`);
//         cy.get('[data-cy="btnSubmit"]').click();

//         cy.wait('@postResetPass').then((xhr) => {
//             expect(xhr.response.statusCode).be.eq(200);

//             cy.get('[data-cy="password-input"]').should('not.have.value');
//             cy.get('[data-cy="btnSubmit"]').click();

//             cy.get('.Toastify__toast--warning').should('have.text','Campo senha vazio! Insira uma senha.');
//         }) 
//     });
// });

describe('Update Info User', () => {

    beforeEach(() => {
        cy.login();
        cy.visit('http://localhost:3000/update-user'); 
    })

    it('Alterar dados com sucesso', () => {
        cy.intercept( 
            { 
                url: 'http://127.0.0.1:3333/user/update', 
                method: 'PUT'
            } 
        ).as('putAccountInfo');
    
        cy.get('[data-cy="name-input"]').clear().type(`Sayuri`);
        cy.get('[data-cy="btnSubmit"]').click();

        cy.wait('@putAccountInfo').its('response.statusCode').should('equal', 200)
    });
    it('Erro ao alterar dados: Campo name vazio', () => {  
        cy.get('[data-cy="name-input"]').clear();
        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Campo name vazio! Insira uma nome');
    });
    it('Erro ao alterar dados: Campo e-mail vazio', () => {  
        cy.get('[data-cy="email-input"]').clear();
        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Campo email vazio! Insira um email');
    });
    it('Erro ao alterar dados: Todos os campos vazios', () => {  
        cy.get('[data-cy="name-input"]').clear();
        cy.get('[data-cy="email-input"]').clear();
        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Todos os campos vazios! Insira os dados');
    });
    it('Erro ao alterar dados: E-mail inválido', () => {  
        cy.get('[data-cy="email-input"]').clear().type('sayuri@luby');
        cy.get('[data-cy="btnSubmit"]').click();

        cy.get('.Toastify__toast--warning').should('have.text','Insira um email válido. Exemplo: exemplo@luby.com.br');
    });
});

