import { setupDefaultRouteMocks } from "../support/utils"

describe('Photos List View Tests', () => {
    beforeEach(() => {
        setupDefaultRouteMocks()
        cy.visit('/photos')
    })

    it('should display photos after loading', () => {
        cy.get('#photos-grid').should('be.visible')
    })

    it('should have photo amount selector', () => {
        cy.get('[role="combobox"]').should('be.visible')
    })

    it('should change photo amount when selecting different value', () => {

        // Open the select dropdown
        cy.get('[role="combobox"]').click()

        // Select 50 photos option
        cy.get('[role="option"]').contains('50').click()

        // Verify the selection changed
        cy.get('[role="combobox"]').should('contain', '50')
    })

    it('should display pagination controls', () => {
        cy.get('.MuiPagination-root').should('be.visible')
    })

    it('should reset to page 1 when changing photo amount', () => {

        // Go to page 2
        cy.get('.MuiPagination-root button').contains('2').click()

        // Change amount
        cy.get('[role="combobox"]').click()
        cy.get('[role="option"]').contains('50').click()

        // Should be back on page 1
        cy.get('.MuiPaginationItem-page[aria-current="page"]').should('contain', '1')
    })

    it('should handle pagination clicks', () => {

        // Click next page
        cy.get('.MuiPagination-root button').contains('2').click()

        // Verify page changed
        cy.get('.MuiPaginationItem-page[aria-current="page"]').should('contain', '2')
    })

    it('should handle API errors in photos list', () => {
        cy.intercept('GET', '**/photos*', {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }).as('getPhotosError')

        cy.contains('Error loading data').should('be.visible')
    })
})