# autoforce
Desafio QA Senior


## Cenários de Teste

Os cenários de teste estão descritos no arquivo [CENARIOS.md](CENARIOS.md).

## Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (gerenciador de pacotes do Node.js)
- JDK (Java Development Kit) - versão aconselhada 21.2.0 LTS

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/desafio-tecnico-autoforce.git

``` 
2. Navegue até o diretório do projeto:
```sh
cd desafio-tecnico-autoforce
```
```sh
npm install
```

## Configuração do JDK (Java Development Kit)

Para executar os relatórios testes, é necessário ter o JDK instalado na máquina. O JDK pode ser baixado no site: https://bell-sw.com/pages/downloads/#jdk-21-lts baixar a versão 21.2.0 LTS. baseado na versão do seu sistema operacional.
Os testes estão utilizando allure report para gerar os relatórios.


## Execução dos Testes
### Abrir o Cypress
Para abrir a interface do Cypress e executar os testes manualmente, utilize o comando:

```sh
npm run cypress:open
```

### Executar os Testes em Linha de Comando
Para executar todos os testes em modo headless (linha de comando), utilize o comando:

```sh
npm run test
```

## Configuração do Cypress
As configurações do Cypress estão definidas no arquivo *cypress.config.js.*

## Prettier
O Prettier é uma ferramenta que ajuda a manter o código formatado de maneira consistente. Para formatar o código, utilize o comando:

```sh 
npm run format
```

## Custom Commands
Os comandos customizados do Cypress estão definidos no arquivo *cypress/support/commands.js*.
*cy.fillLeadForm()* preenche o formulário de cadastro de leads.


## Relatórios de testes

Os relatórios de testes são gerados utilizando o Allure Report. Para gerar o relatório, utilize o comando:

```sh
npm run results
```