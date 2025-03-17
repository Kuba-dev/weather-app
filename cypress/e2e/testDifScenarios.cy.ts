describe('Сhecking different scenarios', () => {
  it('Search for an existing city', () => {
    cy.intercept('GET', '**/geocode/autocomplete*', {
      fixture: 'cityList.json',
    })
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

    cy.visit('http://localhost:5173')

    cy.get('input[name="city"]').type('Mins')
    cy.contains('Minsk').click()
  })

  it('Search for a non-existent city', () => {
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })

    cy.visit('http://localhost:5173')
    cy.get('input[name="city"]').type('Masdokyadfoupaifppoidfsin')
    cy.contains('Nothing found')
  })

  it('Error in city search', () => {
    cy.intercept('GET', '**/geocode/search*', { fixture: 'searchCity.json' })
    cy.intercept('GET', '**/forecast.json*', { statusCode: 500 })
    cy.visit('http://localhost:5173')

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
    cy.visit('http://localhost:5173')
    cy.get('input[name="city"]').type('Minsk')
    cy.contains('Minsk').click()
    cy.get('button[type="submit"]').click()

    cy.contains('Today')
  })
})
