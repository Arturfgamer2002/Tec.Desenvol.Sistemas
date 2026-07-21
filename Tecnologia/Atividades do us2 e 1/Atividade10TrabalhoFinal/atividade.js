// Exercicio 10 Trabalho Final "A Jornada do Herói"
// const rl = require("readline-sync")

// let personagem = {}

// let itens = [
//     {
//         nome: "Espada",
//         classe: "Guerreiro",
//         tipo: "arma",
//         ataque: 8,
//         preco: 80
//     },

//     {
//         nome: "Machado",
//         classe: "Guerreiro",
//         tipo: "arma",
//         ataque: 12,
//         preco: 120
//     },

//     {
//         nome: "Cajado",
//         classe: "Mago",
//         tipo: "arma",
//         ataque: 10,
//         preco: 90
//     },

//     {
//         nome: "Livro Arcano",
//         classe: "Mago",
//         tipo: "arma",
//         ataque: 15,
//         preco: 150
//     },

//     {
//         nome: "Arco Longo",
//         classe: "Arqueiro",
//         tipo: "arma",
//         ataque: 10,
//         preco: 90
//     },

//     {
//         nome: "Besta",
//         classe: "Arqueiro",
//         tipo: "arma",
//         ataque: 15,
//         preco: 140
//     },

//     {
//         nome: "Varinha Sombria",
//         classe: "Feticeiro",
//         tipo: "arma",
//         ataque: 12,
//         preco: 100
//     },

//     {
//         nome: "Orbe Maldito",
//         classe: "Feticeiro",
//         tipo: "arma",
//         ataque: 18,
//         preco: 180
//     },

//     {
//         nome: "Escudo",
//         classe: "Todas",
//         tipo: "armadura",
//         vida: 20,
//         preco: 70
//     },

//     {
//         nome: "Poção",
//         classe: "Todas",
//         tipo: "consumivel",
//         cura: 30,
//         preco: 30
//     }
// ]

// personagem.nome = rl.question('Qual vai ser seu nome de personagem: ')
// personagem.classe = rl.question('Qual vai ser sua classe (Guerreiro, Mago, Feticeiro ou Arqueiro): ')

// switch (personagem.classe) {
//     case 'Guerreiro':
//         personagem.vida = 120
//         personagem.vidaMaxima = 120
//         personagem.ataque = 18
//         personagem.furia = 100
//         console.log(`Você escolheu Guerreiro seus status são: \nVida: ${personagem.vida} \nAtaque: ${personagem.ataque} \nFuria: ${personagem.furia}`)
//     break

//     case 'Mago':
//         personagem.vida = 80
//         personagem.vidaMaxima = 80
//         personagem.ataque = 30
//         personagem.arcano = 130
//         console.log(`Você escolheu Mago seus status são: \nVida: ${personagem.vida} \nAtaque: ${personagem.ataque} \nPoder Arcano: ${personagem.arcano}`)
//     break

//     case 'Arqueiro':
//         personagem.vida = 100
//         personagem.vidaMaxima = 100
//         personagem.ataque = 20
//         personagem.sombra = 60
//         console.log(`Você escolheu Arqueiro seus status são: \nVida: ${personagem.vida} \nAtaque: ${personagem.ataque} \nPoder Sombrio: ${personagem.sombra}`)
//     break

//     case 'Feticeiro':
//         personagem.vida = 90
//         personagem.vidaMaxima = 90
//         personagem.ataque = 40
//         personagem.mana = 150
//         console.log(`Você escolheu Guerreiro seus status são: \nVida: ${personagem.vida} \nAtaque: ${personagem.ataque} \nMana: ${personagem.mana}`)
//     break

//     default:
//         console.log('Classe inválida.')
// }

// personagem.xp = 0
// personagem.nivel = 1
// personagem.ouro = 0

// let inventario = []

// let missoes = [
//     {
//         nome: 'Derrote 3 Goblins',
//         concluida: false
//     },
  
//     {
//         nome: 'Encontrar um Escudo',
//         concluida: false
//     }
// ]

// let goblinsMortos = 0

// let inimigos = [
//     {
//         nome: 'Goblin',
//         vida: 30,
//         ataque: 8
//     },

//     {
//         nome: 'Orc',
//         vida: 50,
//         ataque: 12
//     },
 
//     {
//         nome: 'Esqueleto',
//         vida: 40,
//         ataque: 10
//      },

//      {
//         nome: 'Dragão',
//         vida: 120,
//         ataque: 20
//     }
// ]

// function mostrarStatus() {
//     let missoesConcluidas = 0
    
//     missoes.forEach(missao => {
        
//         if (missao.concluida) {
//             missoesConcluidas++
//         }
//     })

//     console.log("\n===== STATUS =====")
//     console.log(`Nome: ${personagem.nome}`)
//     console.log(`Classe: ${personagem.classe}`)
//     console.log(`Vida: ${personagem.vida}`)
//     console.log(`Ataque: ${personagem.ataque}`)
//     console.log(`XP: ${personagem.xp}`)
//     console.log(`Nível: ${personagem.nivel}`)
//     console.log(`Ouro: ${personagem.ouro}`)
//     console.log(`Itens: ${inventario.length}`)
//     console.log(`Missões concluídas: ${missoesConcluidas}/${missoes.length}`)
// }

// function atacar(inimigo){
//    let sorte = Math.random()

//     if(sorte < 0.15){
//         console.log("Você errou!")
//         return
//     }

//     if(sorte > 0.9){
//         let dano = personagem.ataque * 2
//         inimigo.vida -= dano
//         console.log(`💥 Ataque crítico! Você causou ${dano} de dano.`)
//         return
//     }
//     inimigo.vida -= personagem.ataque
//     console.log(`Você atacou ${inimigo.nome} causando ${personagem.ataque} de dano.`)

//     inimigo.vida -= personagem.ataque
//     console.log(`Você causou ${personagem.ataque} de dano.`)
// }
// let chance = Math.floor(Math.random() * 100)
//    if(chance < 20){
//     console.log("Você errou o ataque!")
//     return
// }

// function receberDano(dano) {
//     personagem.vida -= dano
    
//     console.log(`Você recebeu ${dano} de dano.`)
// }

// function curar(){

//     let evento = Math.floor(Math.random() * 5)

//     switch(evento){

//         case 0:
//             personagem.vida += 20

//             if(personagem.vida > personagem.vidaMaxima){
//                 personagem.vida = personagem.vidaMaxima
//             }

//             console.log("Você descansou e recuperou 20 de vida.")
//         break

//         case 1:
//             console.log("Durante a noite um ladrão roubou 20 moedas.")

//             personagem.ouro -= 20

//             if(personagem.ouro < 0){
//                 personagem.ouro = 0
//             }
//         break

//         case 2:
//             console.log("Você foi atacado durante o descanso!")

//             receberDano(15)
//         break

//         case 3:
//             console.log("Você encontrou uma bolsa com 30 moedas!")

//             personagem.ouro += 30
//         break

//         case 4:
//             console.log("Nada aconteceu durante o descanso.")
//         break
//     }
// }
// function ganharXP(valor){
//     personagem.xp += valor

//     if(personagem.xp >= personagem.nivel * 100){
//         personagem.nivel++
//         personagem.ataque += 5
//         personagem.vidaMaxima += 20
//         personagem.vida = personagem.vidaMaxima

//         console.log("\n*** LEVEL UP! ***")
//         console.log(`Você agora é nível ${personagem.nivel}`)
//     }
// }

// function mostrarInventario(){
//     console.log("\n===== INVENTÁRIO =====")

//     if(inventario.length == 0){
        
//         console.log("Inventário vazio.")
        
//         return
//     }
//     for(let item of inventario){
//         console.log("- " + item)
//     }
// }

// function mostrarMissoes(){
//     console.log("\n===== MISSÕES =====")

//     for(let indice in missoes){
//         let status = missoes[indice].concluida ? "✔" : "❌"
        
//         console.log(`${status} ${missoes[indice].nome}`)
//     }
// }

// function verificarMissoes(){
//     if(goblinsMortos >= 3){
//         missoes[0].concluida = true
//     }
//     if(inventario.includes("Escudo")){
//         missoes[1].concluida = true
//     }
// }

// function combate(){
//     let inimigo = {...inimigos[Math.floor(Math.random()*inimigos.length)]}

//     console.log(`\nUm ${inimigo.nome} apareceu!`)

//     while(inimigo.vida > 0 && personagem.vida > 0){

//         console.log("\n1 - Atacar")
//         console.log("2 - Fugir")

//         let escolha = rl.questionInt("Escolha: ")
//         let chance = Math.random()
        
//         if(chance < 0.25){
//     console.log(`${inimigo.nome} errou o ataque!`)
// }else{
//     receberDano(inimigo.ataque)
// }
//         if(escolha == 1){
//             atacar(inimigo)

//             if(inimigo.vida <= 0){
//                 console.log(`${inimigo.nome} derrotado!`)

//                 personagem.ouro += 20
//                 ganharXP(50)

//                 if(inimigo.nome == "Goblin"){
//                     goblinsMortos++
//                 }
//                 break
//             }
//             receberDano(inimigo.ataque)

//         }else if(escolha == 2){
//             console.log("Você fugiu.")
//             break
//         }else{
//             console.log("Opção inválida.")
//         }
//     }
// }

// function explorar(){
//     let evento = Math.floor(Math.random()*5)

//     switch(evento){
//         case 0:
//             combate()
//         break

//         case 1:
//             console.log("\nVocê encontrou um baú!")

//             let itens = ["Espada","Poção","Escudo","Mapa","Arco"]
//             let item = itens[Math.floor(Math.random()*itens.length)]

//             console.log(`Você encontrou ${item}`)

//             inventario.push(item)
//         break

//         case 2:
//             console.log("\nVocê encontrou uma poção.")

//             inventario.unshift("Poção")
//         break

//         case 3:
//             console.log("\nNada aconteceu...")
//         break

//         case 4:
//             console.log("\nVocê caiu em uma armadilha!")

//             receberDano(15)
//         break

//     }
// }

// let sair = false

// while(!sair && personagem.vida > 0){
//     verificarMissoes()

//     let completas = 0

//     missoes.forEach(missao=>{
//         if(missao.concluida){
//             completas++
//         }
//     })

//     if(completas == missoes.length){
//         console.log("\nPARABÉNS!")
//         console.log("Você concluiu a aventura!")
        
//     break
//     }

//     console.log("\n===== MENU =====")
//     console.log("1 - Explorar")
//     console.log("2 - Ver Status")
//     console.log("3 - Inventário")
//     console.log("4 - Descansar")
//     console.log("5 - Missões")
//     console.log("6 - Remover último item (pop)")
//     console.log("7 - Remover primeiro item (shift)")
//     console.log("8 - Remover item pelo nome (splice)")
//     console.log("9 - Sair")
//     console.log("10 - Usar Item")
//     console.log("11 - Mercador")

//     let opcao = rl.questionInt("Escolha: ")

//     switch(opcao){

//         case 1:
//             let yn = rl.keyInYN('Deseja equipar um item')
//             if (yn) {
//                 equiparItem()
//             }
//             explorar()
//         break

//         case 2:
//             mostrarStatus()
//         break

//         case 3:
//             mostrarInventario()
//         break

//         case 4:
//             curar()
//         break

//         case 5:
//             mostrarMissoes()
//         break

//         case 6:
//             if(inventario.length > 0){
//                 console.log(`Item removido: ${inventario.pop()}`)
//             }else{
//                 console.log("Inventário vazio.")
//             }
//         break

//         case 7:
//             if(inventario.length > 0){
//                 console.log(`Item removido: ${inventario.shift()}`)
//             }else{
//                 console.log("Inventário vazio.")
//             }
//         break

//         case 8:
//             if(inventario.length == 0){
//                 console.log("Inventário vazio.")
//             }else{

//                 let nome = rl.question("Nome do item: ")
//                 let indice = inventario.indexOf(nome)

//                 if(indice != -1){
//                     inventario.splice(indice,1)
//                     console.log("Item removido.")
//                 }else{
//                     console.log("Item não encontrado.")
//                 }
//             }
//         break

//         case 9:
//             sair = true
//             console.log("Até a próxima!")
//         break
        
//         case 10:
//             usarItem()
//         break
        
//         case 11:
//             mercador()
//         break
        
//         default:
//             console.log("Opção inválida.")
//     }
// }

// if(personagem.vida <= 0){
//     console.log("\n==========")
//     console.log(" GAME OVER ")
//     console.log("==========")
// }

// function usarItem() {
//     if (inventario.length == 0) {
//         console.log("Inventário vazio.")
//     return
//     }

//     console.log("\nItens:")

//     inventario.forEach((item, i) => {
//         console.log(`${i + 1} - ${item}`)
//     })

//     let escolha = rl.questionInt("Escolha um item: ") - 1

//     if (escolha < 0 || escolha >= inventario.length) {
//         console.log("Opção inválida.")
//     return
//     }

//     if (personagem.vida > personagem.vidaMaxima, inventario[escolha] == "Poção") {
//         personagem.vida = personagem.vidaMaxima
//         personagem.vida += 30
//         inventario.splice(escolha, 1)
//         console.log("Você recuperou 30 de vida!")
//     } else {
//         console.log("Esse item não pode ser usado.")
//     }
// }


// function mercador(){

//     console.log("\n===== MERCADOR =====")
//     console.log(`Seu ouro: ${personagem.ouro}`)

//     let itensDisponiveis = itens.filter(item =>
//         item.classe == personagem.classe || item.classe == "Todas"
//     )

//     itensDisponiveis.forEach((item, indice)=>{
//         console.log(`${indice+1} - ${item.nome} (${item.preco} ouro)`)
//     })

//     console.log("0 - Sair")

//     let escolha = rl.questionInt("Escolha: ")

//     if(escolha == 0){
//         return
//     }

//     let item = itensDisponiveis[escolha-1]

//     if(!item){
//         console.log("Opção inválida.")
//         return
//     }

//     if(personagem.ouro < item.preco){
//         console.log("Você não possui ouro suficiente.")
//         return
//     }

//     personagem.ouro -= item.preco
//     inventario.push(item.nome)

//     console.log(`Você comprou ${item.nome}!`)
// }

// personagem.arma = null

// function equiparItem(){

//     mostrarInventario()

//     let nome = rl.question("Qual arma deseja equipar? ")

//     let indice = inventario.indexOf(nome)

//     if(indice == -1){
//         console.log("Você não possui esse item.")
//         return
//     }

//     let item = itens.find(i => i.nome == nome)

//     if(item.tipo != "arma"){
//         console.log("Esse item não é uma arma.")
//         return
//     }

//     personagem.arma = item.nome
//     personagem.ataque += item.ataque

//     console.log(`${item.nome} equipada!`)

//     let itensEncontrados = itens.filter(item =>
//     item.classe == personagem.classe || item.classe == "Todas"
// )

// let sorteado = itensEncontrados[Math.floor(Math.random()*itensEncontrados.length)]

// inventario.push(sorteado.nome)

// console.log(`Você encontrou ${sorteado.nome}!`)
// }
