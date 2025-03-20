export default function useAuthentication() {
  return {
    signIn: cy.stub().as('signInStub'),
    signOut: cy.stub().as('signOutStub'),
  }
}
