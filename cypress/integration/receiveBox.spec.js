describe('receiveBox', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should receiveBox', () => {
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

		cy.get('[data-test="menuReceive"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="receiveSearch"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('F1');

		cy.get('[data-test="productItem"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="receiveListCount"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.type('5');

		cy.get('[data-test="receiveSearch"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('PDM');

		cy.get('[data-test="productItem"]:eq(0)')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="receiveListCount"]:eq(1)')
			.should('have.length', 1)
			.and('be.visible')
			.type('5');

		cy.get('[data-test="receiveButton"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
