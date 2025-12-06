declare namespace Cypress {
  interface Chainable {
    loginByGoogleApi(): Chainable<Response>
    store: any
    mockAuthenticationHook(): any
    signInAndAuthenticate(): void
  }
}
