1. Classifique cada requisito abaixo como (F) funcional ou (NF) não funcional:

( F ) " O sistema deve emitir um recibo em PDF ao final da compra. "
( NF ) " O sistema deve suportar 500 usuários simultâneos sem travar. "
( NF ) " As senhas dos usuários devem ficar criptografadas no banco. "
( F ) " O sistema deve permitir cancelar um pedido em até 24h. "

2. Você está modelando o banco de uma pizzaria que faz entregas. Escreva dois requisitos funcionais e um requisito não funcional que fariam sentido para esse sistema.

Funcional: "o sistema deve permitir montar uma pizza com sabores personalizados". Funcional: "o sistema deve calcular o valor total do pedido incluindo taxa de entrega". Não funcional: "o status do pedido deve atualizar em tempo real para o cliente acompanhar a entrega".

3. Ainda pensando na pizzaria: monte um mini dicionário de dados (nome do campo, tipo, tamanho e descrição) para a entidade Pizza, com pelo menos 4 campos.

" id_pizza (Inteiro) — identificador único; nome (Texto, 40) — nome da pizza; tamanho (Texto, 15) — "pequena/média/grande"; preco (Decimal, 6,2) — valor cobrado ".

4. Verdadeiro ou falso
( F ) A união de dois conjuntos traz apenas os elementos que aparecem nos dois ao mesmo tempo.
( V ) A interseção de dois conjuntos traz apenas os elementos comuns a ambos.
( V ) Definir o domínio de um atributo ainda na modelagem conceitual ajuda a evitar dados inconsistentes no futuro.


5. Explique com suas palavras o que é integridade referencial, dando um exemplo diferente do usado na aula (pode ser de qualquer sistema do dia a dia: escola, loja, streaming...).

" Resposta livre. Um bom exemplo mostra uma referência entre duas tabelas (ex.: um pedido que aponta para um cliente) e explica que a integridade referencial impede que essa referência aponte para um cliente que não existe (ou foi apagado) ".