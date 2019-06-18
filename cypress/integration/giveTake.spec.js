describe('giveTake', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should giveTake', () => {
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

		cy.get('[data-test="productItem"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="giveCount"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('1');

		cy.get('[data-test="giveButton"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="takeCount"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('1');

		cy.get('[data-test="takePaid"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('750');

		cy.get('[data-test="takeButton"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="productBack"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
