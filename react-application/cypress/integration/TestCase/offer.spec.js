/// <reference types="cypress" />

describe("Check The offer" , () => {
    it("Offer LogIn" , () => {

        cy.visit("https://www.mgmresorts.com/en/offers.html")
        cy.url().should('include' , 'www.mgmresorts')

        cy.get("#email-widget").type("vikash.sriva012@gmail.com")
        cy.get("#password-widget").type("Vini26@77079093")

        cy.get("button[type=submit]").should('be.visible').contains("Sign In").click()
        // cy.get("a[aria-label=Join Today]").should('be.visible').should('not.be.clicked').click()

        cy.title().should('eq' , 'Offers - MGM Resorts') 

        // cy.get(".link btn--animate btn__primary offer-tile__cta").click()
        



        

       
    })
})