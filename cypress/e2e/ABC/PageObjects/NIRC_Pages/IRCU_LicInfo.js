export class LicenseInfo{

    blueBG = "#form-tabpanel-0 p"
    licenseNumberDD = "#genInfoLicenseNumber"
    licenseNumberDDL = "[role='option']"
    licInfoQQ = "#form-tabpanel-0 [class='MuiBox-root css-0']"
    licInfoTxtNo = "#form-tabpanel-0 [class*='MuiFormControlLabel-root']>span+span"
    liceInfoBtnSave = "[data-testid='SaveIcon']"

    ClickOnLicenseNumberDD(){
        cy.get('#genInfoLicenseNumber').click()
    }
    
    SelectLicenseNumber(number){
        cy.get("[aria-labelledby='genInfoLicenseNumberLabel'] li").eq(number).click()
    }
    
    SelectQQ(number){
        cy.get("#form-tabpanel-0 [type='checkbox']").eq(number).click()
    }
    
    CheckText(locator,expTxt){
        cy.get(locator).invoke('text').then((text)=>{
            expect(text).to.equal(expTxt)
        })
    }

    CheckAllQQ(testData){
        cy.get(this.licInfoQQ).eq(0).should('have.text',testData.IRCU_QQ1)
        cy.get(this.licInfoQQ).eq(1).should('have.text',testData.IRCU_QQ2)
        cy.get(this.licInfoQQ).eq(2).should('have.text',testData.IRCU_QQ3)
        cy.get(this.licInfoQQ).eq(3).should('have.text',testData.IRCU_QQ4)
        cy.get(this.licInfoQQ).eq(4).should('have.text',testData.IRCU_QQ5)
    }

}