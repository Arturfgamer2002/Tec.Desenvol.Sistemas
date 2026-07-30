# MER

Este documento descreve o que é o MER e como e porque utilizalo.

## O que é o MER?

O MER é a sigla para Modelo Entidade Relacionamento. ele é, basicamente, um **desenho** representado o nosso banco de dados e como nossas **entidades** ( que serão nossas  tabelas depois) se ligam e se **relacionam**.

## Porque preciso fazer esse desenho? não é mais fácil só fazer o banco?

É sim possivel criar um banco sem fazer o MER. porém, o MER faz parte do *planejamento* do nosso banco de dados. É como fzer um prédio sem desenhar a planta antes. É possivel, mas garanto que vocÊ não ia querer morar nele.

Ao fazer o MER, nós estamos cuidando para que nosso banco saia exatamente como necessário, sem mais nem menos. assim, evitamos retrabalho lá na frente.

## Onde e como eu posos fazer este desenho?

O MER pode ser feito em qualquer plataforma ou programa que permita desenhar. Existem programas especificos para trabalhar com ele, mas vocÊ pode usar ate´mesmo o canva, o photoshop, o paint ou até mesmo numa folha de papel. No entanto, eu recomendo utilizar os programas especificos como o br modelo:

- https://www.brmodeloweb.com

## Qual o passo a passp para desenharmos?

Antes de fazermos o MER precisamos primeiro ter definido quais as **entidades** ( tabelas ) e ter feito o **dicionário de dados** (aquela lista que define os campos e os tipos de dados destes campos). Então, podemos começar desenhando as entidades no MER. Elas são representadas por *retãngulos* com o nome dentro.

Os **atributos** que nós planejamos anteriormente para estas **entidades** takmbém devem aparecer no desenho ( assim sabemos como construir as tabelas depois só de olhar o desenho). Eles são representados por bolinhas sem fundo ou "brancas".

**ATENÇÃO:** Se um atributo for uma **chave primária** ele será representado por uma bolinha preenchida, ou "preta".

Ambas devem estar ligadas ás entidades (retÂngulos) por **linhas**.

## Relacionamentos

Para podemos criar **cheves estrangeiras**, que são os campos que ligam uma tabela em outra, normalmente pegando emprestado a **chave primária** de outra tabela.
Não usamos "bolinhas" para representá-las, e sim **losangos** com linhas ligando as entidades em questão. Dentro deste losango, damos um título para relação.
Por exemplo, um **aluno** *pertence* á uma **turma**, ou então um **cliente** *compra* uma **bicicleta**.

Um passo importante para entender os relacionamentos é a **cardinalidade**. Ela nos ajuda a entender quantos registros dentro de uma tabela conseguem se relacionar
com quantos de outras tabelas. Confuso?

Pense só: em quantas vendas uma bicicleta pode estar? Uma só. Note que usei a palavra *pode*.

Agora, uma venda pode ter quantas bicicletas? Várias, correto?

Um cliente pode fazer várias compras, quantas ele quiser. POde também não fazer nenhuma.

### Tipos de cardinalidade

* **(0,1)** - Pode não participar de nenhum relacionamento ou participar de apenas um.
  *Exemplo: Um funcionário pode ou não ter um carro da empresa.*

* **(1,1)** - Deve participar de exatamente um relacionamento.
  *Exemplo: todo empréstimo deve estar associado a um único cliente.*

* **(0,N)** - Pode não participar de nenhum relacionamento ou participar de vários.
  *Exemplo: Um cliente pode numa fazer um empréstimo ou fazer vários ao longo do tempo*

* **(1,N)** - Deve participar de pelo menos um relacionamento, mas pode participar de vários.
  *Exemplo: Um empréstimo deve conter pelo menos uma bicicleta, mas pode conter várias.*

* **(N,N)** - Ambos os lados podem participar de vários relacionamentos. Também é chamado de relacionamento muitos-para-muitos.
  *Exemplo: Um aluno pode cursar várias disciplinas, e uma disciplina pode ter vários alunos.*

### Resumindo

* **0** = opcional (pode não existir)
* **1** = obrigatório (deve existir)
* **N** = muitos (vários)

Então:

* **(0,1)** → opcional e no máximo um;
* **(1,1)** → obrigatório e exatamente um;
* **(0,N)** → opcional e vários;
* **(1,N)** → obrigatório e vários.
