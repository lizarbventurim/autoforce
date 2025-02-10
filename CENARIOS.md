# validarFLuxoEnvioLead.cy.js
o teste contemplam os seguintes cenários a baixo:

## 1. Home:
Dado que estou na home
Quando clico na sessão de “novos” no header
Então sou direcionado para listagem de veículos novos 

## 2. Listagem de novos:
Dado que estou na listagem de veículos novos 
Quando clico em algum veículo listado 
Então sou direcionado a interna do veículo

## 3. Interna:
Dado que estou na interna da pagina do veículo desejado 
Quando preencho o formulário 
Então o lead é disparado 


# validarFormEnvioLEad.cy.js
O teste contempla os seguinte cenários a baixo:
## 1. Formulário envio LEAD
Dado que estou no formulário de envio de lead
Quando clicar em enviar sem preencher os campos obrigatórios
Então o sistema deve exibir uma mensagem de erro
*```Por favor, preencha esse campo```*
