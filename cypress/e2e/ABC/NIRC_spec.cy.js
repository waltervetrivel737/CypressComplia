///<reference types="cypress"/>

import { ABC_LoginPage } from "./PageObjects/ABC_LoginPage"
import { ABC_HomePage } from "./PageObjects/ABC_HomePage"
import { GeneralInfoTab } from "./PageObjects/NIRC_Pages/NIRC_GenInfo"
import { CompanyInfo } from "./PageObjects/NIRC_Pages/NIRC_CompnyInfo"
import { QuestionAttestation } from "./PageObjects/NIRC_Pages/NIRC_Q&A"
import { Documents } from "./PageObjects/NIRC_Pages/NIRC_Doc"
import { ReviewTab } from "./PageObjects/NIRC_Pages/NIRC.review"

const loginpage = new ABC_LoginPage
const homePage = new ABC_HomePage
const genInfoPage = new GeneralInfoTab
const companyInfoPage = new CompanyInfo
const questionAttestationPage = new QuestionAttestation
const documentsPage = new Documents
const reviewPage = new ReviewTab

describe('ABC_NIRC_Test',()=>{

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
        homePage.SelectABCApplication('New Industry Representative Application')
        genInfoPage.ToFillGenInfoFields()
        genInfoPage.VerifyAddress()
        cy.contains('Save & Next').click()
        companyInfoPage.ToFillCompanyInfo()
        genInfoPage.VerifyAddress()
        cy.wait(12000)
        cy.contains('Save & Next').click()
        questionAttestationPage.ToFillQATab()
        cy.contains('Save & Next').click()
        documentsPage.AutoFillDocuments()
        cy.contains('Save & Next').click()
        cy.get(reviewPage.digitalPhoto).click()
        cy.get(reviewPage.redXMark).should('have.length', '0')  
        cy.contains('Submit').click()
        cy.wait(3000)
        reviewPage.VerifyApplicationSubmit(testData)
    })
})