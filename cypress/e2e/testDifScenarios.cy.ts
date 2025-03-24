import { calendarEventsActions } from '@store/calendarEvents/calendarEvents.slice'
import { stateAuthenticatedActions } from '@store/isAuthenticated/isAuthenticated.slice'
import { eventList, linkOnPage } from 'cypress/constants'
// разбить
describe('Сhecking different scenarios', () => {
  beforeEach(function () {
    cy.loginByGoogleApi()
  })

  it('Search for an existing city', () => {
    cy.intercept('GET', '**/geocode/autocomplete*', {
      fixture: 'cityList.json',
    })
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

    cy.visit(linkOnPage)

    cy.get('input[name="city"]').type('Mins')
    cy.contains('Minsk').click()
  })

  it('Search for a non-existent city', () => {
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

    cy.visit(linkOnPage)
    cy.get('input[name="city"]').type('Masdokyadfoupaifppoidfsin')
    cy.contains('Nothing found')
  })

  it('Error in city search', () => {
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })
    cy.intercept('GET', '**/forecast.json*', { statusCode: 500 })
    cy.visit(linkOnPage)

    cy.get('input[name="city"]').type('Minsk')
    cy.contains('Minsk').click()
    cy.get('button[type="submit"]').click()
  })

  it('Successful city search', () => {
    cy.intercept('GET', '**/geocode/autocomplete*', {
      fixture: 'cityList.json',
    })
    cy.intercept('GET', '**/forecast.json*', { fixture: 'weather.json' })
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })
    cy.visit(linkOnPage)
    cy.get('input[name="city"]').type('Minsk')
    cy.contains('Minsk').click()
    cy.get('button[type="submit"]').click()

    cy.contains('Today')
    cy.contains('0')
    cy.contains('Saturday')

    cy.contains('Hourly').click()
    cy.contains('00:00')
    cy.contains('-1')
  })

  it('Should render a list of events', () => {
    cy.visit(linkOnPage)

    cy.signInAndAuthenticate()

    cy.window()
      .its('Cypress.store')
      .invoke('dispatch', calendarEventsActions.fetchEventsSuccess(eventList))

    cy.contains('Events3')

    cy.contains('Sign Out').click()
    cy.contains('Yes').click()
    cy.contains('Sign In')
  })

  it('Should no render events list and should display error', () => {
    cy.visit(linkOnPage)

    cy.signInAndAuthenticate()

    cy.window()
      .its('Cypress.store')
      .invoke(
        'dispatch',
        stateAuthenticatedActions.setAuthenticatedError(
          new Error('An unknown error occurred'),
        ),
      )

    cy.contains('An unknown error occurred')
  })

  it('Should throw an error when there is an error receiving events', () => {
    cy.visit(linkOnPage)

    cy.signInAndAuthenticate()

    cy.window()
      .its('Cypress.store')
      .invoke(
        'dispatch',
        calendarEventsActions.fetchEventsFailure('An unknown error occurred'),
      )
  })
})
