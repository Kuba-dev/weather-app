import { calendarEventsActions } from '@store/calendarEvents/calendarEvents.slice'
import { stateAuthenticatedActions } from '@store/isAuthenticated/isAuthenticated.slice'
import { useAuthentication } from '@src/hooks';

describe('Сhecking different scenarios', () => {
  beforeEach(function () {
    cy.loginByGoogleApi()
  })

  // it('Search for an existing city', () => {
  //   cy.intercept('GET', '**/geocode/autocomplete*', {
  //     fixture: 'cityList.json',
  //   })
  //   cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

  //   cy.visit('http://localhost:5173')

  //   cy.get('input[name="city"]').type('Mins')
  //   cy.contains('Minsk').click()
  // })

  // it('Search for a non-existent city', () => {
  //   cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

  //   cy.visit('http://localhost:5173')
  //   cy.get('input[name="city"]').type('Masdokyadfoupaifppoidfsin')
  //   cy.contains('Nothing found')
  // })

  // it('Error in city search', () => {
  //   cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })
  //   cy.intercept('GET', '**/forecast.json*', { statusCode: 500 })
  //   cy.visit('http://localhost:5173')

  //   cy.get('input[name="city"]').type('Minsk')
  //   cy.contains('Minsk').click()
  //   cy.get('button[type="submit"]').click()
  // })

  // it('Successful city search', () => {
  //   cy.intercept('GET', '**/geocode/autocomplete*', {
  //     fixture: 'cityList.json',
  //   })
  //   cy.intercept('GET', '**/forecast.json*', { fixture: 'weather.json' })
  //   cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })
  //   cy.visit('http://localhost:5173')
  //   cy.get('input[name="city"]').type('Minsk')
  //   cy.contains('Minsk').click()
  //   cy.get('button[type="submit"]').click()

  //   cy.contains('Today')
  // })

  it('Should render a list of events', () => {
    const mockHook = useAuthentication()
    console.log(mockHook)
    cy.stub(mockHook, 'signIn').as('signInStub')
    cy.stub(mockHook, 'signOut').as('signOutStub')

    cy.visit('http://localhost:5173')

    cy.window()
      .its('Cypress.store')
      .invoke(
        'dispatch',
        calendarEventsActions.fetchEventsSuccess([
          {
            id: 1,
            summary: 'Events1',
            start: { dateTime: '2025-03-18T17:30:00+03:00' },
          },
          {
            id: 2,
            summary: 'Events2',
            start: { dateTime: '2025-03-18T18:30:00+03:00' },
          },
          {
            id: 3,
            summary: 'Events3',
            start: { dateTime: '2025-03-18T18:30:00+03:00' },
          },
        ]),
      )

    cy.window()
      .its('Cypress.store')
      .invoke('dispatch', stateAuthenticatedActions.setIsAuthenticated(true))

    cy.window()
      .its('Cypress.store')
      .invoke('getState')
      .then(state => {
        console.log(state)
      })
  })
})
