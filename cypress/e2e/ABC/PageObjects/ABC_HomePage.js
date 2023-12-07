export class ABC_HomePage{

    txtGettingStarted = '#dialog-title'

    ClickOnBtnContinue(){
        cy.get("#dialog-description [type='button']").click()
    }

    ClickOnCreateNewApplication(){
        cy.contains('Create New Application').click()
        }

        SelectABCApplication(applicationType){
            // cy.get("[class*='accountTypeBox MuiBox-root'] svg+p").click()
            // cy.contains('Create Application').click()
            cy.get("[class*='accountTypeBox MuiBox-root'] svg+p").each((elm)=>{
                if(elm.text() == applicationType){
                    cy.log("Txt: "+elm.text())
                    cy.log("NIRC")
                    cy.wrap(elm).click()
                    cy.contains('Create Application').click()
                }
            })
        }       
}