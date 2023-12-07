export class ABC_LoginPage{

    userName = '#username'
    password = '#password'
    chkBox = "[name='termsConditions']"
    btnSubmit = "[type='submit']"

    LoginABC(){
        cy.visit('https://al-abc-public-qa.nls.egov.com/login')
        cy.get('#username').type('alexholder_qabc@yopmail.com')
        cy.get('#password').type('Complia@110')
        cy.get("[name='termsConditions']").click()
        cy.get("[type='submit']").click()
    }

}