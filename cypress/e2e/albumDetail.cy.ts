import { setupDefaultRouteMocks } from '../support/utils';

describe('Album Detail Tests', () => {
  beforeEach(() => {
    setupDefaultRouteMocks();
    cy.visit('/albums/1');
  });

  it('should get album photos', () => {
    cy.get('#photos-grid').should('be.visible');
    cy.get('#photos-grid').children().first().should('exist');
  });

  it('should display album title', () => {
    cy.contains('h1', 'Album 1').should('be.visible');
  });

  it('should display photo details when a photo is clicked', () => {
    cy.get('#photos-grid button').first().click();
    cy.url().should('include', '/photo/1');
  });
});
