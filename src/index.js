import inquirer from "inquirer";
import { personagens } from "./personagens.js";
import { rolarDado, rolarDadoPista } from "./utils/dice.js";
import { pistas } from "./pistas.js";

let player1;
let player2;

const resposta = await inquirer.prompt([
  {
    type: "checkbox",
    name: "selecionados",
    message: "Escolha 2 personagens:",
    choices: personagens.map((personagem) => ({
      name: personagem.nome,
      value: personagem,
    })),
    validate: (answer) => {
      if (answer.length !== 2) {
        return "Você precisa selecionar exatamente 2 opções";
      }
      return true;
    },
  },
]);

player1 = resposta.selecionados[0];
player2 = resposta.selecionados[1];

player1.vidas = 3;
player2.vidas = 3;

for (let partidas = 1; partidas <= 5; partidas++) {
  let numeroPista = rolarDadoPista();
  let pistaEscolhida = pistas.find((x) => x.id === numeroPista);

  let dado1 = rolarDado();
  let dado2 = rolarDado();

  console.log(`------------------------`);
  console.log(`\n 🏁 Rodada ${partidas}`);
  console.log(`Pista sorteada: ${pistaEscolhida.nome}`);
  console.log(` `);

  let pontuacaoPlayer1;
  let pontuacaoPlayer2;
  let nomeAtributo;

  if (pistaEscolhida.id === 1) nomeAtributo = "nova velocidade: ";
  else if (pistaEscolhida.id === 2) nomeAtributo = "nova manobrabilidade: ";
  else nomeAtributo = "novo poder: ";

  if (pistaEscolhida.id === 1) {
    pontuacaoPlayer1 = player1.velocidade + dado1;
    pontuacaoPlayer2 = player2.velocidade + dado2;
  } else if (pistaEscolhida.id === 2) {
    pontuacaoPlayer1 = player1.manobrabilidade + dado1;
    pontuacaoPlayer2 = player2.manobrabilidade + dado2;
  } else {
    pontuacaoPlayer1 = player1.poder + dado1;
    pontuacaoPlayer2 = player2.poder + dado2;
  }

  console.log(`${player1.nome}: ${nomeAtributo} ${pontuacaoPlayer1}`);
  console.log(`${player2.nome}: ${nomeAtributo} ${pontuacaoPlayer2}`);

  console.log(" ");

  if (pontuacaoPlayer1 > pontuacaoPlayer2) {
    player2.vidas--;
    console.log(`${player2.nome} perdeu uma vida ❤️`);
  } else if (pontuacaoPlayer2 > pontuacaoPlayer1) {
    player1.vidas--;
    console.log(`${player1.nome} perdeu uma vida ❤️`);
  } else {
    console.log("Empate!");
  }

  console.log(`Total de Vidas de ${player1.nome}: ${player1.vidas} vidas`);
  console.log(`Total de Vidas de ${player2.nome}: ${player2.vidas} vidas`);

  console.log(` `);

  if (player1.vidas === 0 || player2.vidas === 0) {
    break;
  }
}

console.log("\n 🏆 Resultado Final");

if (player1.vidas > player2.vidas) {
  console.log(`${player1.nome} venceu!`);
} else if (player2.vidas > player1.vidas) {
  console.log(`${player2.nome} venceu!`);
} else {
  console.log("Empate!");
}
