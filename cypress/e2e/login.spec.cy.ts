import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe("Cy.Heroe Test", () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  });

  describe('Login de sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      loginPage.loginWithAnyUser('admin@test.com', 'test123')
      loginPage.checkAccessValid()
    })
  })

  describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      loginPage.loginWithAnyUser('abcd', 1234)
      loginPage. checkAccessInvalid()
    })
   })
})