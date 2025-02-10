# autoforce
Desafio QA Senior


## Cenários de Teste

Os cenários de teste estão descritos no arquivo [CENARIOS.md](CENARIOS.md).

## Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (gerenciador de pacotes do Node.js)

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