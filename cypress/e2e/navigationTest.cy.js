describe('Scholarship Page Tests for Sevima', () => {
  beforeEach(() => {
    cy.visit('https://modalqa.github.io/taskQA');
  });

  it('should display the correct title', () => {
    cy.get('h1').should('contain.text', 'Create your first website');
  });

  it('should display the header section and check navigation', () => {
    cy.get('[data-testid="readMore-button"]').should('contain.text', 'Read More')
    cy.get('[data-testid="readMore-button"]').click()
    cy.get('h4').should('contain.text', 'Got Questions?');
  })

  it('should render the form component correctly', () => {
    cy.get("h3").should('contain.text', 'Contacts')
    cy.get('input[name="name"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="phone"]').should('be.visible')
  })

  it('should fill and submit the form', () => {
    // Isi form
    cy.get('input[name="name"]').type('Budiman')
    cy.get('#email-form02-6').type('budiman@yopmail.com')
    cy.get('input[name="phone"]').type("0813")
    cy.get('#textarea-form02-6').type('This is a test message');

    // Klik tombol submit
    cy.get('button[type="submit"]').click();
  });

  
});
