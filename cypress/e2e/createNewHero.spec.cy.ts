import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe("Cy.Heroe Test", () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser('admin@test.com', 'test123')
    loginPage.checkAccessValid()
  });

  describe('Criar um herói com sucesso', () => {
    it('Deve criar um herói com sucesso', () => {
      homePage.createNewHero()
      homePage.checkNewHeroCreated()
    })
  })
})