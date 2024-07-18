/// <reference types="Cypress" />

import elementsPage from "../POM/elementsPage";
const ElementsPage = new elementsPage();


describe('Register', () => {

    beforeEach(function() {
  
      cy.visit('https://demoqa.com')
      cy.fixture('credentialsForms').then((credentialsForms) => {
        this.credentialsForms = credentialsForms;
      });
      cy.fixture('colorsFontSize').then((colorsFontSize) => {
        this.colorsFontSize = colorsFontSize;
      });
  });
  it('Verify the Text box tab', function() {
        cy.visit('https://demoqa.com/text-box')

        ElementsPage.typeUserName(this.credentialsForms.forms.userName)
        ElementsPage.typeUserEmail(this.credentialsForms.forms.userEmail)
        ElementsPage.typeCurrentAddress(this.credentialsForms.forms.currentAddress)
        ElementsPage.typePermanentAddress(this.credentialsForms.forms.permanentAddress)
        ElementsPage.clickSubmitBtn()

        ElementsPage.getNameText().should('have.text', this.credentialsForms.forms.name)

        ElementsPage.getSubmitBtn().should('have.css', 'background-color', this.colorsFontSize.blue)
        .should('have.css', 'font-size', this.colorsFontSize.fontSize)
  });
  it('Verify the second check of Check Box', () => {
      cy.visit('https://demoqa.com/checkbox')

      ElementsPage.clickStrawLabel()
      ElementsPage.clickSecondCheckBox()
  });
  it('Verify the third check of Check Box', () => {
      cy.visit('https://demoqa.com/checkbox')

      ElementsPage.clickStrawLabel()
      ElementsPage.clickDesktopCheckBox()
      ElementsPage.clickDocumentsCheckBox()
      ElementsPage.clickDowmloadsCheckBox()

      ElementsPage.clickPlusIcon()
      ElementsPage.clickDownloadsIcon()
  });
  it('Verify the Radio button "Yes"', function() {
      cy.visit('https://demoqa.com/radio-button')

      ElementsPage.checkYesRadioButton().should('be.checked')
      ElementsPage.getYesText().should('have.text', this.credentialsForms.yesText)

      ElementsPage.checkImpressiveRadioButton().should('be.checked')
      ElementsPage.getImpressiveText().should('have.text', this.credentialsForms.impressiveText)

      ElementsPage.clickNoRadioButton()
  });
});