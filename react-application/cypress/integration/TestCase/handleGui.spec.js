describe('Test GUI Element', function () {
    it("Varify Input box and Radio Button", function () {
        cy.visit("http://demo.guru99.com/test/newtours/index.php")  // Visit URL
        cy.url().should('include' , 'demo.guru99')  // varify URL

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('vikas7275')
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('motheranjana000')

        cy.get('input[name=submit]').should('be.visible').click()   // sign in 

        // varify title of the page 

        cy.title().should('eq' , 'Find a Flight: Mercury Tours:')  // Title varification

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // visibility check
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        cy.get('input[name=findFlights]').should('be.visible').click()  // continue button

        cy.title().should('eq' , 'Select a Flight: Mercury Tours:')  // Title varification




    }
    )

}
)
