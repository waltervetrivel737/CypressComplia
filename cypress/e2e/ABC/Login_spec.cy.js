///<reference types="cypress"/>
import { ABC_LoginPage } from "./PageObjects/ABC_LoginPage"
import { ABC_HomePage } from "./PageObjects/ABC_HomePage"

const loginPage = new ABC_LoginPage
const homePage = new ABC_HomePage

describe('ABC',()=>{
    it('LoginSucess',()=>{

        cy.visit('https://al-abc-public-qa.nls.egov.com/login')
        cy.get(loginPage.userName).type('alexholder4600_qabc@yopmail.com')
        cy.get(loginPage.password).type('Complia@110')
        cy.get(loginPage.chkBox).click()
        cy.get(loginPage.btnSubmit).click()
        cy.wait(3000)
        cy.get(homePage.txtGettingStarted).should('have.text','Getting started');
    })
})