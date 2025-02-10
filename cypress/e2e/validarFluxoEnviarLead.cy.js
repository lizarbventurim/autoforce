/// <reference types="cypress" />

const faker = require('faker-br');


describe("Validar fluxo de listagem de veículo específico", () => {
  const veiculosNovos = '[class="header__navbar container"] [class="nav-item"]';
  const selectVeiculo = '[class="new-vehicle-card__title"]';
  const button = "[type=button]";
  const formLead = '[class="conversion-form"] [class="form__header-title"]';
  const validaEnvio =  '[class="form-message-overlay__top-message"]'
  const name = faker.name.findName()
  const email = faker.internet.email()
  const telefone = faker.phone.phoneNumber()
  const cpf = faker.br.cpf()


  it("Validar fluxo de acesso a página de um veículo e enviar o LEAD", () => {
    cy.visit("/");
    cy.title().should(
      "eq",
      "Fiat é na Layout testes - Showroom Fiat 2.0 - Dois"
    );
    cy.get(veiculosNovos).contains("Novos").click();
    cy.url().should("include", "/novos");

    cy.visit("/");
    cy.get(selectVeiculo).contains("Uno 2021").should("be.visible").click();
    cy.url().should("include", "/novos/uno-2021");

    cy.get(button).contains("Eu quero").click();
    cy.get(formLead).contains("Estou Interessado").should("be.visible");
    cy.get('input[name="name"]').should("be.visible").type(name);
    cy.get('input[type="email"]').should("be.visible").type(email);
    cy.get('input[type="phone"]').should("be.visible").type(telefone + "0");
    cy.get('input[name="cpf"]').should("be.visible").type(cpf);
    cy.get('button[type="submit"]').contains("Enviar").should("be.visible").click();
    cy.get(validaEnvio).contains("Solicitação realizada com sucesso!").should("be.visible");
  });
});

