export class CompanyInfo{

    contInfoHeader = "#form-tab-2"
    compnyRep = "#companyInfoCompanyRepresented"
    compnyType = "#companyInfoManufature"
    compnyTypeDD = "[aria-labelledby='companyInfoManufatureLabel'] li"
    position ="#companyInfoPositionTitle"
    compnyPhone = "#companyInfoPhoneNumber"
    compnyEmail = "#companyInfoEmail"
    street = "#companyInfoStreet"
    city = "#companyInfoCity"
    countyDD ="#companyInfoCounty"
    countyDDL ="[data-value*='-']"
    stateDD = "#companyInfoState"
    stateDDL = "[role='option']"
    zipCode = "#companyInfoZipCode"

    ToFillCompanyInfo(){
        cy.get(this.compnyRep).type('Uti')
        cy.get(this.compnyType).click()
        cy.get(this.compnyTypeDD).eq(1).click()
        cy.get(this.position).type('Lead')
        cy.get(this.compnyPhone).type('1234567890')
        cy.get(this.compnyEmail).type('wv@egov.com')
        cy.get(this.street).type('East')
        cy.get(this.city).type('Palani')
        cy.get(this.countyDD).click()
        cy.get(this.countyDDL).eq(3).click()
        cy.get(this.stateDD).click()
        cy.get(this.stateDDL).eq(1).click()
        cy.get(this.zipCode).type('12345')
    }

}