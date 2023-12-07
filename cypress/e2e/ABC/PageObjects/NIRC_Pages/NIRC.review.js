export class ReviewTab{

    reviewTabHeader = "#form-tab-review"
    redXMark = "#form-tabpanel-4 [data-testid='ClearIcon']"
    alertMsg = "[role='presentation'] [class*='MuiAlert-message']"
    txtSubmitted = "[role='definition'] [class*='MuiAlert-message'] p"
    digitalPhoto = "[name='digitalPhoto']"

    VerifyApplicationSubmit(testData){
        cy.get(this.txtSubmitted).then((elm)=>{
            expect(elm.text()).to.contain(testData.Txt_Submitted)
        })
    }

}