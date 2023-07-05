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

## Event Storming
- Acesse https://miro.com/app/board/uXjVM4hKAVc=/?share_link_id=546864818586

# API
## Rotas
> Documentacao das rotas disponniveis
### Cliente
- Path `/cliente`
    - **POST**: Cria um novo cliente
      - **HTTP Code**:
        - 200 - cadastrado corretamente
        - 403 - payload com dados invalidos
  - **Payload**
```json
{
"cpf": "80845052209",
"nome": "Lukete",
"email": "email@example.com",
"telefone": "+553199345783"
}
```
- **Resposta**
```json
{
"id": 1,
"cpf": "80845052209",
"nome": "Lukete",
"email": "email@example.com",
"telefone": "+553199345783"
}
```

 Path  `/cliente/{cpf}`
  - **GET**: Busca cliente pelo cpf
  - **HTTP Code**:
    - 200 - encontrou cliente
    - 404 - cliente nao existe
  - **Resposta**
```json
{

"id": 1,
"cpf": "80845052209",
"nome": "Lukete",
"email": "email@example.com",
"telefone": "+553199345783"
}
```

### Produto
- Path `/produto`
  - **POST**: Cria um novo produto
  - **HTTP Code**:
    - 200 - cadastrado corretamente
    - 403 - payload com dados invalidos
  - **Payload**
```json
{
"nome": "Produto x",
"descricao": "Descricao y",
"id_categoria": 1,
"preco": 99.89,
"imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
}
```
- **Resposta**
```json
{
"id": 1,
"nome": "Produto x",
"descricao": "Descricao y",
"id_categoria": 1,
"preco": 99.89,
"imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
}
```

 Path  `/produto/categoria/{id_categoria}`
  - **GET**: Busca produto pela categoria
  - **HTTP Code**:
    - 200 - encontrou produto
    - 404 - produto nao existe
  - **Resposta**
```json
[{
"id": 1,
"nome": "Produto x",
"descricao": "Descricao y",
"id_categoria": 1,
"preco": 399.34,
"imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
}]
```

 Path  `/produto/{id}`
  - **PATH**: Edita um produto
  - **HTTP Code**:
    - 200 - encontrou produto
    - 404 - produto nao existe
  - **Resposta**
```json
{
"nome": "Produto x editado",
"descricao": "Descricao y editada",
"id_categoria": 1,
"preco": 399.34,
"imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
}
``` 

 Path  `/produto/{id}`
  - **DELETE**: Deleta um produto
  - **HTTP Code**:
    - 200 - deletou o produto com sucesso
    - 404 - produto nao existe
  - **Resposta**
```json
{
 "success": true
}
```

### Pedido
- Path `/pedido`
  - **POST**: Cria um novo pedido
  - **HTTP Code**:
    - 200 - cadastrado corretamente
    - 403 - payload com dados invalidos
  - Possiveis status:
    - C = criado
    - F = finalizado
    - P = preparado
    - E = entregue
    - N = cancelado
  - **Payload**
```json
{
"status": "C",
"pedido_items": [
  {
    "quantidade": 1,
    "id_produto": 1
  },
  {
    "quantidade": 4,
    "id_produto": 2
  },
]
```
- **Resposta**
```json
{
"id": 1,
"data_criacao": "2023-31-03 14:22:10",
"status": "C",
"pedido_items": [
    {
      "id": 1,
      "quantidade": 1,
      "produto": {
        "id": 1,
        "nome": "Produto x",
        "descricao": "Descricao y",
        "id_categoria": 1,
        "preco": 399.34,
        "imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
      }
    },
 {
      "id": 2,
      "quantidade": 4,
      "produto": {
        "id": 2,
        "nome": "Produto x2",
        "descricao": "Descricao y2",
        "id_categoria": 3,
        "preco": 1399.34,
        "imagens": "https://random.imagecdn.app/500/500",
      }
    }
   ]
]
```

 Path  /pedidos`
  - **GET**: Busca todos os pedidos
  - **HTTP Code**:
    - 200 - sucesso
  - **Resposta**
```json
[
  {
  "id": 1,
  "data_criacao": "2023-31-03 14:22:10",
  "status": "C",
  "pedido_items": [
    {
      "id": 1,
      "quantidade": 1,
      "produto": {
        "id": 1,
        "nome": "Produto x",
        "descricao": "Descricao y",
        "id_categoria": 1,
        "preco": 399.34,
        "imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
      }
    }
   ]
  },
  {
  "id": 2,
  "data_criacao": "2023-31-03 15:44:30",
  "status": "P",
   "pedido_items": [
    {
      "id": 1,
      "quantidade": 4,
      "produto": {
        "id": 2,
        "nome": "Produto x",
        "descricao": "Descricao y",
        "id_categoria": 1,
        "preco": 399.34,
        "imagens": "https://random.imagecdn.app/500/500, https://random.imagecdn.app/500/500",
      }
    }
   ]
  },
]
```


