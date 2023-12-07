export class QuestionAttestation{

    qaTabHeader ="#form-tab-3"
    rdoBtnQQ = "[name='qnApplicationCorrect']"
    signature = "#signature"
    sigDate = "#signatureDate-dt"

    ToFillQATab(){
        cy.get(this.rdoBtnQQ).eq(0).click()
        cy.get(this.signature).type('walter')
    }

}