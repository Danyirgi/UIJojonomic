/// <reference types="cypress" />

describe('My First Test', () => {

    it('Visits the service web', () => {
      cy.viewport(1920, 1080) 
      cy.visit('https://www.service.nsw.gov.au/')
    })

    it('insert in input field and go to another page', () => {
      cy.viewport(1920, 1080) 
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit('https://www.service.nsw.gov.au/')
      cy.wait(2000)
      // cy.get('#homeautosuggestd9cC-dHU724 > .form__text').type('Apply for a number plate').wait(2000)
      cy.get('[name="q"]').eq(1).type('Apply for a number plate{enter}', {force: true, delay: 0})
      cy.contains('apply for a number plate').wait(2000).click()
      cy.get('#page-title')
      })

      it('Go to location page and validate service centre', () => {
        cy.viewport(1920, 1080)
        cy.on('uncaught:exception', (err, runnable) => {
          return false
        })
        cy.visit('https://www.service.nsw.gov.au/')
        cy.get('.MainNav__list-peZtddYtxn > :nth-child(4)').click()
        cy.get('#locatorTextSearch').clear().type('Sydney 2020').wait(2000) 
        // cy.get('.autocomplete__option').click()
        cy.get('.form__actions > .button').click()
        cy.contains('Haymarket Service Centre').should('be.visible')
      })

    it('Go to location page and validate service centre', () => {
      cy.viewport(1920, 1080)
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit('https://www.service.nsw.gov.au/')
      cy.get('.MainNav__list-peZtddYtxn > :nth-child(4)').click()
      cy.get('#locatorTextSearch').clear().type('Sydney Domestic Airport 2020').wait(2000) 
      // cy.get('.autocomplete__option').click()
      cy.get('.form__actions > .button').click()
      cy.contains('Rockdale Service Centre').should('be.visible')
    })
  })
