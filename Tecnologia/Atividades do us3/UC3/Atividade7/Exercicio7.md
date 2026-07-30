1. Uma tabela em que uma célula guarda "SP, RJ, MG" (vários estados numa célula só) viola qual forma normal?

( X ) Primeira Forma Normal (1FN)
(  ) Segunda Forma Normal (2FN)
(  ) Terceira Forma Normal (3FN)
(  ) Nenhuma — isso é permitido


2. Associe as colunas
(A) Anomalia de inserção    (B) Anomalia de atualização    (C) Anomalia de exclusão

( C ) Ao apagar o único pedido de um cliente, perde-se o cadastro dele por tabela.
( B ) Mudar um dado repetido exige alterar várias linhas — esquecer uma gera inconsistência.
( A ) Não é possível cadastrar um cliente novo que ainda não fez nenhum pedido.


3. A tabela abaixo está toda "espremida" numa única tabela. Identifique quais campos deveriam sair dela e formar tabelas próprias, e diga o motivo (1FN, 2FN ou 3FN).

id_matricula	aluno	id_curso	nome_curso	carga_horaria_curso
1	Bruno	10	UC3	84

Os campos nome_curso e carga_horaria_curso dependem de id_curso, não de id_matricula — isso é uma dependência transitiva, violando a 3FN. A solução é criar uma tabela Curso (id_curso, nome_curso, carga_horaria_curso) separada, e a tabela Matrícula fica só com id_matricula, aluno e id_curso (FK).

4. Verdadeiro ou falso
( V ) Para estar na 3FN, uma tabela precisa antes estar na 2FN.
( F ) Desnormalizar significa aplicar a normalização duas vezes seguidas.
( V ) A dependência funcional é a base teórica por trás de todas as formas normais.


5. Explique por que a normalização é importante mesmo em um projeto pequeno, e cite pelo menos uma situação em que "desnormalizar" pode fazer sentido.

" Resposta livre. Um bom texto cita que a normalização evita inconsistência de dados e retrabalho, mesmo em bancos pequenos, e reconhece que a desnormalização pode ser útil em sistemas com leitura intensa e pouca escrita, onde performance de consulta importa mais do que economizar espaço" .

6. Amarre as quatro aulas: explique, em um parágrafo curto, todo o caminho que percorremos desde "conversar com o cliente" (Aula 2) até "ter uma tabela pronta e bem organizada" (Aula 4), passando pelo desenho do MER (Aula 3).

" Resposta livre. Espera-se algo como: primeiro entendemos o que é dado/informação e escolhemos entre relacional e não-relacional (Aula 1); depois levantamos requisitos com o cliente e documentamos no dicionário de dados (Aula 2); em seguida desenhamos as entidades, atributos e relacionamentos no MER (Aula 3); por fim, aplicamos a normalização para garantir que as tabelas resultantes não tenham redundância nem anomalias (Aula 4)" .