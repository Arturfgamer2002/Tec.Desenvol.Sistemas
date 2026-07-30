1. O campo que "empresta" a chave primária de outra tabela para criar uma ligação entre elas é chamado de:

(  ) Chave candidata
(  ) Chave primária
( X ) Chave estrangeira
(  ) Atributo derivado

2. Para cada par de entidades, indique se a cardinalidade é 1:1, 1:N ou N:N:

( 1:1 ) Pessoa e CPF
( 1:N ) Autor e Livro (um autor pode escrever vários livros; um livro, nesse sistema, tem só um autor)
( N:N ) Ator e Filme (um ator atua em vários filmes; um filme tem vários atores)


3. Classifique cada atributo abaixo como simples, composto, multivalorado ou derivado:

( Multivalorado ) Telefones de contato de um Cliente (pode ter mais de um)
( Composto ) Endereço, dividido em rua/número/bairro
( Derivado ) Tempo de casa de um funcionário, calculado a partir da data de admissão
( Simples ) CPF


4. Uma locadora de filmes quer um sistema com as entidades Filme, Cliente e Aluguel. Um cliente pode alugar vários filmes ao longo do tempo, e um filme pode ser alugado várias vezes (por clientes diferentes, em datas diferentes). Desenhe (no papel) as três entidades com pelo menos 3 atributos cada, aponte a chave primária de cada uma, e diga qual(is) tabela(s) vai(vão) precisar de chave estrangeira.

" Filme (id_filme PK, título, gênero) — Cliente (id_cliente PK, nome, telefone) — Aluguel (id_aluguel PK, data_aluguel, data_devolucao, id_filme FK, id_cliente FK). A tabela Aluguel é quem carrega as duas chaves estrangeiras, pois é ela que liga Cliente a Filme ".

5. Verdadeiro ou falso

( F ) Uma entidade fraca pode existir no banco mesmo sem nenhuma ligação com uma entidade forte.
( V ) Um relacionamento ternário envolve exatamente três entidades diferentes.
( F ) Relacionamentos N:N podem ser implementados sem nenhuma tabela extra.

