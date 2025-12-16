import { setupDefaultRouteMocks } from "../support/utils"

describe('Navigation Tests', () => {
    beforeEach(() => {
        setupDefaultRouteMocks()
        cy.visit('/')
    })

    it('should display the menu bar on all pages', () => {
        cy.get('#menu-bar').should('be.visible')
    })

    it('should navigate to photos page', () => {
        cy.contains('Photos').click()
        cy.url().should('include', '/photos')
        cy.contains('Your photos').should('be.visible')
    })

    it('should navigate to albums page', () => {
        cy.contains('Albums').click()
        cy.url().should('include', '/albums')
    })

    it('should maintain menu bar visibility after navigation', () => {
        cy.contains('Albums').click()
        cy.get('#albums-nav-button').should('be.visible')

        cy.contains('Photos').click()
        cy.get('#photos-nav-button').should('be.visible')
    })
})