-- public.Categorias definition

-- Drop table

-- DROP TABLE public.Categorias;

CREATE TABLE public.Categorias (
	id uuid NOT NULL DEFAULT uuid_generate_v1(),
	nome varchar NOT NULL,
	CONSTRAINT Categorias_pkey PRIMARY KEY (id)
);


-- public.Clientes definition

-- Drop table

-- DROP TABLE public.Clientes;

CREATE TABLE public.Clientes (
	id uuid NOT NULL DEFAULT uuid_generate_v1(),
	cpf varchar NOT NULL,
	nome varchar NULL,
	email varchar NULL,
	telefone varchar NULL,
	CONSTRAINT Clientes_pkey PRIMARY KEY (id)
);


-- public.Pedidos definition

-- Drop table

-- DROP TABLE public.Pedidos;

CREATE TABLE public.Pedidos (
	id uuid NOT NULL DEFAULT uuid_generate_v1(),
	data_criacao timestamptz NULL DEFAULT now(),
	status varchar NOT NULL DEFAULT 'C'::character varying,
	id_cliente uuid NOT NULL,
	CONSTRAINT Pedidos_pkey PRIMARY KEY (id),
	CONSTRAINT Pedidos_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.Clientes(id) ON DELETE SET NULL
	
);

-- public.Produtos definition

-- Drop table

-- DROP TABLE public.Produtos;


CREATE TABLE public.Produtos (
	id uuid NOT NULL DEFAULT uuid_generate_v1(),
	nome varchar NOT NULL,
	descricao text NULL,
	preco float8 NOT NULL,
	imagens text NULL,
	id_categoria uuid NULL,
	CONSTRAINT Produtos_pkey PRIMARY KEY (id),
	CONSTRAINT Produtos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.Categorias(id) ON DELETE SET NULL
);


-- public.Pedido_items definition

-- Drop table

-- DROP TABLE public.Pedido_items;

CREATE TABLE public.Pedido_items (
	id uuid NOT NULL DEFAULT uuid_generate_v1(),
	id_produto uuid NOT NULL,
	id_pedido uuid NOT NULL,
	quantidade float8 NOT NULL,
	CONSTRAINT Pedido_items_pkey PRIMARY KEY (id),
	CONSTRAINT Pedido_items_id_pedido_fkey FOREIGN KEY (id_pedido) REFERENCES public.Pedidos(id) ON DELETE CASCADE,
	CONSTRAINT Pedido_items_id_produto_fkey FOREIGN KEY (id_produto) REFERENCES public.Produtos(id) ON DELETE CASCADE
)