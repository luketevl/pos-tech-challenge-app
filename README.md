# DDD
Controle de gerenciamento de pedidos

## Sudbominio Principal
- Montagem do pedido pelo app.
- Gerenciamento dos produtos
- Busca de produtos
- Listagem de produtos
- Checkout para pagamento
- Gerenciamento do estoque.
- Identificacao por CPF do cliente

## Subdominio Generico
- Aviso de alteracao de status do pedido e monitoramento em tela.
- Exibicao do tempo de espera.

## Subdominio Suporte
- Gerenciamento de Clientes
- Gerenciamento de Categorias
- Busca de categorias

## Domain Storytelling
### Dominio Puro
![Dominio puro](./resources/dominio_puro.png)

### Dominio Digitalizado
![Dominio digitalizado](./resources/dominio_digitalizado.png)

## Linguaguem Ubiqua
### Dicionario
- **Cliente**: Toda pessoa que inicia o processo de abertura de um pedido no sistema.
- **Atendente**: Todo pessoa que trabalha na empresa, seja no caixa, cozinha ou atendimento ao cliente.
- **Administrador**: Todo pessoa que trabalha na empresa, e que tenha permissao para gerenciar os produtos, categorias e pedidos na area administrativa do sistema.
- **Produto**: Todo o item comercializado pela empresa
- **Categoria**: Sao categorias que podem ser vinculadas aos produtos.
- **Pedido**: Seria o agrupamento de produtos selecionados pelos clientes, com quantidade, totais e forma de pagamento.
- **Pagamento**: Processo de pagamento de um pedido pelo cliente.

  
## Modelagem do Dominio

