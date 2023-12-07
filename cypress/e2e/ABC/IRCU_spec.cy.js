///<reference types="cypress"/>

import { ABC_LoginPage } from "./PageObjects/ABC_LoginPage"
import { ABC_HomePage } from "./PageObjects/ABC_HomePage"
import { GeneralInfoTab } from "./PageObjects/NIRC_Pages/NIRC_GenInfo"
import { CompanyInfo } from "./PageObjects/NIRC_Pages/NIRC_CompnyInfo"
import { QuestionAttestation } from "./PageObjects/NIRC_Pages/NIRC_Q&A"
import { Documents } from "./PageObjects/NIRC_Pages/NIRC_Doc"
import { ReviewTab } from "./PageObjects/NIRC_Pages/NIRC.review"
import { LicenseInfo } from "./PageObjects/NIRC_Pages/IRCU_LicInfo"

const loginpage = new ABC_LoginPage
const homePage = new ABC_HomePage
const genInfoPage = new GeneralInfoTab
const companyInfoPage = new CompanyInfo
const questionAttestationPage = new QuestionAttestation
const documentsPage = new Documents
const reviewPage = new ReviewTab
const licInfoPage = new LicenseInfo

describe('ABC_IRCU_Test',()=>{

    let testData;
    before(()=>{
        cy.fixture('ABC').then((data)=>{
            testData= data
        })
    })

    beforeEach(()=>{
        loginpage.LoginABC()
        cy.wait(3000)
        homePage.ClickOnBtnContinue()
        homePage.ClickOnCreateNewApplication()
    })

    it('T1-Submit NIRC',()=>{
        homePage.SelectABCApplication('Industry Representative Update')
        licInfoPage.CheckText(licInfoPage.blueBG, testData.IRCU_BlueBG)
        licInfoPage.ClickOnLicenseNumberDD()
        licInfoPage.SelectLicenseNumber(0)
        licInfoPage.CheckAllQQ(testData)
        cy.get(licInfoPage.licInfoTxtNo).each((elm) => {
            expect(elm.text()).to.equal('No')
        })
        licInfoPage.SelectQQ(0)
        cy.get(licInfoPage.liceInfoBtnSave).click()
        cy.get(licInfoPage.licInfoTxtNo).eq(0).should('have.text', 'Yes')
        cy.contains('Save & Next').click()
        cy.get(genInfoPage.genInfoHeader).should('be.enabled').and('have.text', testData.IRCU_Tab1)
        cy.get(companyInfoPage.contInfoHeader).should('be.disabled').and('have.text', testData.IRCU_Tab2)
        cy.get(questionAttestationPage.qaTabHeader).should('be.enabled').and('have.text', testData.IRCU_Tab3)
        cy.get(documentsPage.docTabHeader).should('be.enabled').and('have.text', testData.IRCU_Tab4)
        cy.get(reviewPage.reviewTabHeader).should('be.enabled').and('have.text', testData.IRCU_Tab5)
        cy.get(genInfoPage.firstName).should('be.enabled')
        cy.get(genInfoPage.lastName).should('be.enabled')
        cy.get(genInfoPage.dob).should('be.disabled')
        cy.get(genInfoPage.driverLicenseNumber).should('be.disabled')
        cy.get(genInfoPage.driverLicenseState).should('be.disabled')
        cy.get(genInfoPage.email).should('be.enabled')
        cy.get(genInfoPage.phoneNumber).should('be.enabled')
        cy.get(genInfoPage.street).should('be.enabled')
        cy.get(genInfoPage.city).should('be.enabled')
        // cy.get(genInfoPage.county).should('be.enabled')
        // cy.get(genInfoPage.state).should('be.enabled')
        cy.get(genInfoPage.zipCode).should('be.enabled')
        cy.contains('Save & Next').click()
        cy.get(questionAttestationPage.rdoBtnQQ).eq(0).should('not.be.checked').click()
        cy.get(questionAttestationPage.rdoBtnQQ).eq(1).should('not.be.checked')
        cy.get(questionAttestationPage.signature).should('be.enabled').type('Walter')
        cy.get(questionAttestationPage.sigDate).should('be.enabled')
        cy.contains('Save & Next').click()
        documentsPage.AutoFillDocuments()
        cy.contains('Save & Next').click()
        cy.get(reviewPage.redXMark).should('have.length', '0')  
        cy.contains('Submit').click()
        cy.wait(3000)
        reviewPage.VerifyApplicationSubmit(testData)


    })
})