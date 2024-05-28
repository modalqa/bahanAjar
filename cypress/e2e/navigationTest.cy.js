describe('JavaScript Alerts Testing', () => {
  
  beforeEach(() => {
    cy.visit('https://modalqa.github.io/taskQA') // Ganti dengan path atau URL yang benar
  });

  it('displays alert and verifies the alert message', () => {
    cy.get('#jsAlertButton').click();
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Ini adalah alert!')
    });

    cy.get('#result').should('have.text', 'Anda menutup alert!');
  });

  it('displays confirm and verifies the confirm message on OK', () => {
    cy.get('#jsConfirmButton').click();
    
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Anda yakin?')
      return true; // Menekan OK
    });

    cy.get('#result').should('have.text', 'Anda menekan OK!');
  });

  it('displays confirm and verifies the confirm message on Cancel', () => {
    cy.get('#jsConfirmButton').click();
    
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Anda yakin?')
      return false; // Menekan Cancel
    });

    cy.get('#result').should('have.text', 'Anda menekan Cancel!');
  });

  it('displays prompt and verifies the prompt message with input', () => {
    const inputText = 'Andi';

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(inputText);
      cy.get('#jsPromptButton').click();
    });

    cy.get('#result').should('have.text', `Halo, ${inputText}!`);
  });

  it('displays prompt and verifies the prompt message on Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(null);
      cy.get('#jsPromptButton').click();
    });

    cy.get('#result').should('have.text', 'Anda menekan Cancel!');
  });

});
