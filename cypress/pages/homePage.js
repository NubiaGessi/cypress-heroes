class HomePage {
    
    selectorsList() {
        const selectors = {
            createNewHeroButton: "[href='/heroes/new']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powersField: '[data-cy="powersSelect"]',
            submitButton: "[novalidate=''] button"
        }
    
        return selectors

    }

        createNewHero() {
            cy.get(this.selectorsList().createNewHeroButton).click()
            cy.get(this.selectorsList().nameField).type('Flying Girl')
            cy.get(this.selectorsList().priceField).type(500)
            cy.get(this.selectorsList().fansField).type(50)
            cy.get(this.selectorsList().savesField).type(30)
            cy.get(this.selectorsList().powersField).select('Flying')
            cy.get('input[type="file"]').selectFile('cypress/fixtures/flyingGirl.jpg', { force: true });
            cy.get(this.selectorsList().submitButton).click()
        }
        
        checkNewHeroCreated() {
            cy.contains('Flying Girl').should('be.visible');
        }
}


export default HomePage