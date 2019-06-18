describe('sellBox', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should sellBox', () => {
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

		cy.get('[data-test="menuSell"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="sellSearch"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('F1');

		cy.get('[data-test="productItem"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="sellListCount"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.type('5');

		cy.get('[data-test="sellSearch"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('PDM');

		cy.get('[data-test="productItem"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="sellListCount"]:eq(1)')
			.should('have.length', 1)
			.and('be.visible')
			.type('5');

		cy.get('[data-test="sellPaid"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('7500');

		cy.get('[data-test="sellButton"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
