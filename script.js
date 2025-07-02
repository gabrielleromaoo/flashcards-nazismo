const flashcards = [
  {
    pergunta: "O que foi o nazismo?",
    resposta: "Foi uma ideologia totalitária liderada por Adolf Hitler na Alemanha, baseada no nacionalismo extremo, racismo e autoritarismo."
  },
  {
    pergunta: "Quem foi o líder do regime nazista?",
    resposta: "Adolf Hitler."
  },
  {
    pergunta: "Qual era o partido político nazista?",
    resposta: "Partido Nazista (NSDAP – Partido Nacional-Socialista dos Trabalhadores Alemães)."
  },
  {
    pergunta: "O que foi o Holocausto?",
    resposta: "O extermínio de cerca de 6 milhões de judeus e outras minorias pelo regime nazista."
  },
  {
    pergunta: "Como o nazismo chegou ao poder na Alemanha?",
    resposta: "Através da eleição democrática, seguida da consolidação do poder por meio de medidas autoritárias."
  }
];

let current = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const cardEl = document.getElementById("card");

function showCard(index) {
  const card = flashcards[index];
  questionEl.textContent = card.pergunta;
  answerEl.textContent = card.resposta;
  answerEl.style.display = "none";
}

cardEl.addEventListener("click", () => {
  if (answerEl.style.display === "none") {
    answerEl.style.display = "block";
  } else {
    answerEl.style.display = "none";
  }
});

function nextCard() {
  current = (current + 1) % flashcards.length;
  showCard(current);
}

showCard(current);
