import { environment } from './../../src/environments/environment'
const jwt = require('jsonwebtoken')
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', (username: string, password: string) => {
  Cypress.log({
    name: 'loginViaAuth0',
  })
  const options = {
    method: 'POST',
    url: `https://${environment.auth.domain}/oauth/token`,
    body: {
      grant_type: 'password',
      username: username,
      password: password,
      // audience: `https://${environment.domain}/api/v2}`,
      audience: 'https://dev-mj80-p38.us.auth0.com/api/v2/',
      scope: 'openid profile email',
      client_id: `${environment.auth.clientId}`,
      client_secret: `${Cypress.env('clientSecret')}`,
    },
  }
  cy.request(options).then(({ body }) => {
    const claims = jwt.decode(body.id_token)
    const {
      nickname,
      name,
      picture,
      updated_at,
      email,
      email_verified,
      sub,
      exp,
    } = claims

    const item = {
      body: {
        ...body,
        decodedToken: {
          claims,
          user: {
            nickname,
            name,
            picture,
            updated_at,
            email,
            email_verified,
            sub,
          },
        },
      },
      expiresAt: exp,
    }

    window.localStorage.setItem('auth0Cypress', JSON.stringify(item))

    // cy.visit('/')
  })
})

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login via auth0 using api
       * @param count=2
       * @example cy.login('testUser', 'secretPassword')
       */
      login(username: string, password: string)
    }
  }
}
