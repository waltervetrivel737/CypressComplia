export class Documents{

    docTabHeader = "#form-tab-4"
    btnAutoFill = "[aria-label='Auto fill documents']"
    btnPopUpContinue = "#dialog-description [type='button']"

    AutoFillDocuments(){
        cy.get(this.btnAutoFill).click()
        cy.reload()
        cy.get(this.btnPopUpContinue).click()
        cy.get(this.docTabHeader).click()
    }
}