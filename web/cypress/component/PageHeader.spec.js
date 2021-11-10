/// <reference types="cypress" />

import React from 'react';
import PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader conponent', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/PageHeader/styles.css'

    it('deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "Bootcamp Agilizei"
        mount
            (
                <Router>
                    <PageHeader
                        title={title}
                        description={description}
                    />
                </Router>
            ),
        {
            stylesheets: [baseCss, indexCss]
        }
        cy.get('.page-header').as('header');
        cy.get('@header').find('strong').as('title');
        cy.get('@header').chieldren('p').as('description');

        cy.get('@title').should('have.text', title);
        cy.get('@description').should('have.text', description);
        cy.get('@header').then(($elemento) => {
            expect($elemento.css('background-color')).to.be.eq('rgb(130, 87, 229)')
            expect($elemento.css('flex-direction')).to.be.eq('column')
        });

    });
});