/// <reference types="cypress" />

describe('Impressum page test', () => {
    beforeEach(() => {
        cy.visit('/impressum');

        cy.viewport(1440, 660);
    });
    it('should contain email', () => {
        cy.contains(/mail@maximiliangarmatsch.com/i);
    });
});
