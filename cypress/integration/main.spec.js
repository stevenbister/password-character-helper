import { createPwd } from './utils';

const passwordLength = 12;
const password = createPwd(passwordLength);

describe('Opens the home page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Focuses the password input and enters a password', () => {
  const passwordInput = 'input[type=password]';

  it('successfully focussed', () => {
    cy.get(passwordInput).focus();
  });

  it('enters a password', () => {
    cy.get(passwordInput).type(password);
  });
});

describe('Selects all of characters to show', () => {
  const checkboxes = 'input[type=checkbox]';

  it('selects the checkboxes', () => {
    cy.get(checkboxes).each((el) => {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap(el).click();
    });
  });

  it('checks the output length matches the password', () => {
    cy.get('#output').children().should('have.length', passwordLength);
  });
});
