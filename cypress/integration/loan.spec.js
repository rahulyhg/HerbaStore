describe('loan', () => {
	before(() => {
		cy.visit('http://herbastore.dev');		
	})
	it('should loan', () => {
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

		cy.get('[data-test="menuLoan"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

		cy.get('[data-test="loanPaid"]')
			.should('have.length', 1)
			.and('be.visible')
			.type('500');

		cy.get('[data-test="loanButton"]')
			.should('have.length', 1)
			.and('be.visible')
			.click();

	})
})
