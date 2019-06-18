describe('intNewProduct', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should intNewProduct', () => {
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
			.type('LiftOff');

		cy.get('[data-test="productNotFound"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="productNumber"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('1142857');

		cy.get('[data-test="productName"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('Liftoff');

		cy.get('[data-test="productPrice"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('750');

		cy.get('[data-test="productCount"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('5');

		cy.get('[data-test="productCreate"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
