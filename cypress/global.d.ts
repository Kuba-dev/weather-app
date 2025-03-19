declare namespace Cypress {
  interface Chainable {
    loginByGoogleApi(): Chainable<Response>
    getGoogleCalendarEvents(): Chainable<Response>
    store: any
    mockAuthenticationHook(): any
  }
}
