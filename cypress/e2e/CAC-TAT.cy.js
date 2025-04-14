describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('preenche e envia o formulário com sucesso', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    cy.get('#firstName').type('Murilo')
    cy.get('#lastName').type('Munari')
    cy.get('#email').type('mu_bissiato@hotmail.com')
    cy.get('#phone').type('11993155201')

    cy.get('#product').select('Mentoria')
    cy.get('input[type="radio"][value="feedback"]').check()
    cy.get('#open-text-area').type('Teste de mensagem')

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

})
