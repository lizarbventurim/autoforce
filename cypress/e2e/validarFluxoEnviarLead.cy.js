/// <reference types="cypress" />

const faker = require("faker-br")

describe("Validar fluxo de listagem de veículo específico", () => {
  const veiculosNovos = '[class="header__navbar container"] [class="nav-item"]'
  const selectVeiculo = '[class="new-vehicle-card__title"]'
  const name = faker.name.findName()
  const email = faker.internet.email()
  const telefone = faker.phone.phoneNumber()
  const cpf = faker.br.cpf()

  it("Validar fluxo de acesso a página de um veículo e enviar o LEAD", () => {
    cy.visit("/")
    cy.title().should("eq", "Fiat é na Layout testes - Showroom Fiat 2.0 - Dois")
    cy.get(veiculosNovos).contains("Novos").click()
    cy.url().should("include", "/novos")
    cy.title().should("eq", "Veículos Novos Fiat é na Layout testes - Showroom Fiat 2.0 - Dois")
    cy.get(selectVeiculo).contains("Uno 2021").should("be.visible").click()
    cy.url().should("include", "/novos/uno-2021")
    cy.title().should("eq", "Uno 2021 - é na Layout testes - Showroom Fiat 2.0 - Dois")
    cy.fillLeadForm(name, email, telefone + "0", cpf)
  })
})                                
