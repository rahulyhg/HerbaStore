describe('intStorageGiveOne', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should intStorageGiveOne', () => {
		cy.get('[data-test="loginUsername"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('zbynek.rybicka@gmail.com');

		cy.get('[data-test="loginPassword"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('mojeMilaJulinka');

		cy.get('[data-test="loginSend"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="productSearch"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('F1');

		cy.get('[data-test="productGiveOne"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
