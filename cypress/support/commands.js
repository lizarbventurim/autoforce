// custom commands para o teste de preenchimento do formulário de lead
Cypress.Commands.add("fillLeadForm", (name, email, phone, cpf) => {
  // elementos da página
  const button = "[type=button]"
  const formLead = '[class="conversion-form"] [class="form__header-title"]'
  const validaEnvio = '[class="form-message-overlay__top-message"]'

  cy.get(button).contains("Eu quero").click()
  cy.get(formLead).contains("Estou Interessado").should("be.visible")
  cy.get('input[name="name"]').should("be.visible").type(name)
  cy.get('input[type="email"]').should("be.visible").type(email)
  cy.get('input[type="phone"]').should("be.visible").type(phone)
  cy.get('input[name="cpf"]').should("be.visible").type(cpf)
  cy.get('button[type="submit"]').contains("Enviar").should("be.visible").click()
  cy.intercept("POST", "https://boxoffice.autoforce.com/latest/").as("postLead")
  cy.wait("@postLead")
  cy.get(validaEnvio).contains("Solicitação realizada com sucesso!").should("be.visible")
})
