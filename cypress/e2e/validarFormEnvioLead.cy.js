/// <reference types="cypress" />

describe("Validar preenchimento de campos obrigatórios", () => {
  const button = "[type=button]";
  const formLead = '[class="conversion-form"] [class="form__header-title"]';
  const camposObrigatorios = '[class="form__text-field"]'

  it("Validar fluxo de acesso a página de um veículo e enviar o LEAD", () => {
    cy.visit("/novos/uno-2021");
    cy.url().should("include", "/novos/uno-2021");
    cy.title().should(
      "eq",
      "Uno 2021 - é na Layout testes - Showroom Fiat 2.0 - Dois"
    );
    cy.get(button).contains("Eu quero").click();
    cy.get(formLead).contains("Estou Interessado").should("be.visible");
    cy.get('input[name="name"]').should("be.visible").click();
    cy.get('input[type="email"]').should("be.visible").click();
    cy.get('input[type="phone"]')
      .should("be.visible")
      .click();
    cy.get('input[name="cpf"]').should("be.visible").click();
    cy.get('button[type="submit"]')
      .contains("Enviar")
      .should("be.visible")
      .click();
    cy.get(camposObrigatorios).contains("Por favor, preencha esse campo").should("be.visible");
  });
});
