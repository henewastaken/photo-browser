import { setupDefaultRouteMocks } from "../support/utils"

describe('Albums View Tests', () => {
    beforeEach(() => {
        setupDefaultRouteMocks()
        cy.visit('/albums')
    })

    it('should display the albums page title', () => {
        cy.contains('h1', 'Your Albums').should('be.visible')
    })

    it('should display albums after loading', () => {
        cy.get('#albums-grid').should('have.length.at.least', 1)
        cy.get('#albums-grid button').first().should('be.visible')
    })

    it('should display album buttons with IDs', () => {
        cy.get('#albums-grid button').first().should('contain', '1')
    })

    it('should navigate to album detail when clicked', () => {
        cy.get('#albums-grid button').first().click()
        cy.url().should('include', '/albums/1')
    })

    it('should handle API errors gracefully', () => {
        cy.intercept('GET', '**/albums*', {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }).as('getAlbumsError')

        cy.contains('error').should('be.visible')
        cy.get('p').should('have.css', 'color', 'rgb(255, 0, 0)')
    })
})