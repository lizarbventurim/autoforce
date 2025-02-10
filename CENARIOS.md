## Home:
Dado que estou na home
Quando clico na sessão de “novos” no header
Então sou direcionado para listagem de veículos novos 

## Listagem de novos:
Dado que estou na listagem de veículos novos 
Quando clico em algum veículo listado 
Então sou direcionado a interna do veículo

## Interna:
Dado que estou na interna da pagina do veículo desejado 
Quando preencho o formulário 
Então o lead é disparado 

## Formulário envio LEAD
Dado que estou no formulário de envio de lead
Quando clicar em enviar sem preencher os campos obrigatórios
Então o sistema deve exibir uma mensagem de erro
*```Por favor, preencha esse campo```*
