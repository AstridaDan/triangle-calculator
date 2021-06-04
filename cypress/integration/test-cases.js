/// <reference types="cypress" />

describe('Test Cases', () => {
    // To go on the same server - if you use Visual Studio code -
    // Download extension - Live Server. And then - Go Live
    // If you don't use Visual studio code, you can run tests on command line.
    // Use : npx cypress run 

    it('Check visibility', () => {
        cy.visit('/')

        cy.get('[data-testid=Cx]').should('not.be.visible')
        cy.get('[data-testid=Cy]').should('not.be.visible')
      })
    it('First case', () => {
      cy.visit('/')

      cy.get('[data-testid=aSide]').type('3')
      cy.get('[data-testid=bSide]').type('4')
      cy.get('[data-testid=cSide]').type('5')

      cy.get('[data-testid=button]').click()

      cy.get('[data-testid=type]').should('have.text', 'Triangle is scalene')
      
      cy.get('[data-testid=Cx]').should('have.text', '90')
      cy.get('[data-testid=Cy]').should('have.text', '120')
    })

    it('Second case', () => {
        cy.visit('/')
  
        cy.get('[data-testid=aSide]').type('100')
        cy.get('[data-testid=bSide]').type('100')
        cy.get('[data-testid=cSide]').type('180')
  
        cy.get('[data-testid=button]').click()
  
        cy.get('[data-testid=type]').should('have.text', 'Triangle is isosceles')
        
        cy.get('[data-testid=Cx]').should('have.text', '134.99999999999997')
        cy.get('[data-testid=Cy]').should('have.text', '65.38348415311016')
    })

    it('Third case', () => {
        cy.visit('/')
  
        cy.get('[data-testid=aSide]').type('1000')
        cy.get('[data-testid=bSide]').type('1000')
        cy.get('[data-testid=cSide]').type('1000')
  
        cy.get('[data-testid=button]').click()
  
        cy.get('[data-testid=type]').should('have.text', 'Triangle is equilateral')
        
        cy.get('[data-testid=Cx]').should('have.text', '75')
        cy.get('[data-testid=Cy]').should('have.text', '129.9038105676658')
    })
    it('Fourth case', () => {
        cy.visit('/')
  
        cy.get('[data-testid=aSide]').type('0')
        cy.get('[data-testid=bSide]').type('2')
        cy.get('[data-testid=cSide]').type('3')
  
        cy.get('[data-testid=button]').click()     
        cy.get('[data-testid=info]').contains('not possible')
    })
  })
