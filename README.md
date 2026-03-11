# 🏁 Mario Kart CLI Simulator

Um pequeno simulador de corrida inspirado no universo de Mario Kart, criado para **revisar conceitos básicos de Node.js puro**, lógica de programação e organização de código em JavaScript.

O projeto roda **inteiramente no terminal**, permitindo que o usuário selecione personagens e simule uma corrida baseada em atributos e sorte (dados).

---

# 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como um exercício para:

* Reforçar conceitos fundamentais de **Node.js**
* Praticar **JavaScript moderno (ES Modules)**
* Trabalhar com **estrutura modular de arquivos**
* Simular lógica de jogo utilizando **loops, condições e funções**
* Criar uma pequena **CLI interativa**

A ideia não é criar um jogo complexo, mas sim **revisar fundamentos de forma prática**.

---

# ⚙️ Tecnologias Utilizadas

* **Node.js**
* **JavaScript (ES Modules)**
* **Inquirer.js** → para interação no terminal
* Estrutura modular com **imports/exports**

---

# 📂 Estrutura do Projeto

```
mario-kart-simulator
│
├── src
│   ├── index.js
│   ├── personagens.js
│   ├── pistas.js
│   │
│   └── utils
│       └── dice.js
│
├── package.json
└── README.md
```

### 📌 Descrição dos arquivos

**index.js**

Arquivo principal da aplicação.

Responsável por:

* iniciar o jogo
* permitir a escolha dos personagens
* executar as rodadas
* calcular pontuação
* definir o vencedor

---

**personagens.js**

Contém os personagens disponíveis no jogo e seus atributos.

Exemplo:

* velocidade
* manobrabilidade
* poder

---

**pistas.js**

Define os tipos de pista disponíveis na corrida.

Cada pista influencia qual atributo será usado na rodada.

Exemplo:

* reta → velocidade
* curva → manobrabilidade
* confronto → poder

---

**utils/dice.js**

Contém funções utilitárias para gerar números aleatórios simulando dados.

Exemplo:

* rolar dado da corrida
* sortear pista

---

# 🎮 Como o Jogo Funciona

1️⃣ O usuário escolhe **2 personagens** no terminal.

2️⃣ A corrida acontece em **rodadas**.

3️⃣ Em cada rodada:

* Uma pista é sorteada
* Cada jogador rola um dado
* O atributo correspondente à pista é usado

Exemplo:

| Tipo de pista | Atributo utilizado |
| ------------- | ------------------ |
| Reta          | Velocidade         |
| Curva         | Manobrabilidade    |
| Confronto     | Poder              |

4️⃣ O resultado da rodada é calculado:

```
pontuação = atributo do personagem + dado
```

5️⃣ Quem tiver a menor pontuação **perde uma vida**.

6️⃣ O jogo termina quando:

* um jogador perde todas as vidas
  ou
* todas as rodadas terminam.

---

# 🧠 Conceitos Praticados

Durante o desenvolvimento deste projeto foram revisados:

* ES Modules (`import` / `export`)
* Organização de código em **múltiplos arquivos**
* Uso de **bibliotecas externas**
* Manipulação de **arrays e objetos**
* Estruturas de repetição (`for`)
* Condicionais (`if/else`)
* Geração de números aleatórios
* Interação via **terminal (CLI)**

---

# 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório

```
git clone https://github.com/seu-usuario/mario-kart-simulator
```

---

### 2️⃣ Instale as dependências

```
npm install
```

---

### 3️⃣ Execute o projeto

```
node src/index.js
```

---

# 📌 Exemplo de Execução

```
? Escolha 2 personagens
✔ Mario
✔ Bowser

🏁 Rodada 1
Pista sorteada: Curva

Mario: 7
Bowser: 5

Bowser perdeu uma vida ❤️
```

---

# 📚 Motivação

Esse projeto faz parte de um processo pessoal de **revisão de fundamentos do Node.js**, reforçando conceitos básicos antes de avançar para aplicações mais complexas.

Criar pequenos projetos práticos é uma forma eficiente de consolidar conhecimento e manter familiaridade com a linguagem.

---

# 🔮 Possíveis Melhorias Futuras

Algumas ideias para evolução do projeto:

* sistema de pontuação acumulativa
* mais personagens
* mais tipos de pista
* eventos especiais
* interface visual com **CLI mais avançada**
* transformar em **pacote executável via npm**

---

# 👨‍💻 Autor

Projeto desenvolvido como exercício de estudo e revisão de conceitos em Node.js.
