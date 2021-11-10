/// <reference types="cypress" />

context('connections endpoint', () => {
    it('GET - Obter o total de conexões realizadas', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((Response) => {
            console.log(Response)
        })
    });
});