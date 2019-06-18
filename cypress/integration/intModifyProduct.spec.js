describe('intModifyProduct', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should intModifyProduct', () => {
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

		cy.get('[data-test="productModify"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="productSave"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
