export class GeneralInfoTab{

    genInfoHeader = "#form-tab-1"
    firstName = "#genInfoFirstName"
    lastName = "#genInfoLastName"
    dob = "#genInfoDateOfBirth-dt"
    driverLicenseState = "#genInfoDriversLicenseStateId+input"
    driverLicenseNumber = "#genInfoDriversLicenseStateIdNumber"
    email = "#genInfoEmail"
    phoneNumber = "#genInfoPhoneNumber"
    street = "#physicalStreet"
    city = "#physicalCity"
    county = "#physicalCounty"
    state = "#physicalState"
    zipCode = "#physicalZipCode"

    ToFillGenInfoFields(){
        cy.get(this.firstName).type('Walter')
        cy.get(this.lastName).type('Vetri')
        cy.get(this.dob).type('12/25/1993')
        cy.get(this.driverLicenseState).click()
        cy.get("[data-value='AL']").click()
        cy.get(this.driverLicenseNumber).type('1234')
        cy.get(this.email).type('wv@egov.com')
        cy.get(this.phoneNumber).type('1111111111')
        cy.get(this.street).type('East')
        cy.get(this.city).type('Palani')
        cy.get(this.county).click()
        cy.get("[data-value='02-Baldwin']").click()
        cy.get(this.state).click()
        cy.get("[data-value='AL']").click()
        cy.get(this.zipCode).type('12345')
    }

    VerifyAddress(){
        cy.contains('Verify Address').click({force: true})
        cy.contains('Entered Address').click()
        cy.contains('Done').click()
    }

}