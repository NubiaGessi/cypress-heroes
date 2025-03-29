class LoginPage {
    selectorsList() {
        const selectors = {
            loginButton: 'li > .undefined',
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: 'button.bg-blue-700',
            homePage: 'a > .undefined',
            wrongCredentialAlert: '.text-red-500'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/heroes')
    }

    loginWithAnyUser(emailUser, passwordUser) {
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().emailField).type(emailUser)
        cy.get(this.selectorsList().passwordField).type(passwordUser)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkAccessValid () {
        cy.get(this.selectorsList().homePage)
    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage