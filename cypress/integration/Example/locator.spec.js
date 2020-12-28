describe("Do this Test" , function()
    {
        it("Do Some Cases" , function()
            {
                cy.visit("https://demo.nopcommerce.com/") // Open URL
     
                cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")   // Search Item
    
                cy.get('[type="submit"]').click()  // Click Search button
                cy.get(".product-box-add-to-cart-button[value = 'Add to cart']").click()

                cy.get("#product_enteredQuantity_4").clear().type('2')  // Quantity

                cy.get("#add-to-cart-button-4").click() // Add to cart Button

                cy.wait(5000)

                cy.get("#topcartlink > a > span.cart-label").click()  // Shoppuing Cart link
                cy.wait(3000)

                cy.get(".product-unit-price").contains("$1,800.00")  // Validation Point


            }
        
        ) 
    }
)