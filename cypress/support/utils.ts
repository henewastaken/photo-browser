/// <reference types="cypress" />

import { albums } from "../fixtures/albums";
import { photos } from "../fixtures/photos";


export function setupDefaultRouteMocks() {
    cy.intercept('GET', '**/jsonplaceholder.typicode.com/users/*/albums', albums).as('getAlbums')
    cy.intercept('GET', '**/jsonplaceholder.typicode.com/photos?*', photos).as('getPhotos')
    cy.intercept('GET', '**/jsonplaceholder.typicode.com/albums/*/photos?*', photos).as('getAlbumPhotos')
}

export interface ResultsResponse<T> {
    status: 200;
    next: string | null;
    previous: string | null;
    results: T;
}

export function successResponse<T>(results: T): ResultsResponse<T> {
    return {
        status: 200,
        results,
        next: null,
        previous: null,
    };
}
