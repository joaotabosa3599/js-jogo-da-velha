let turno =1
const vitorias = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
let score = 0;
let scoreO = 0;
let tabuleiro = ["", "", "", "", "", "", "", "", ""]
let placar1 = document.getElementById("placarX")
let placar2 = document.getElementById("placarO")
let res = document.getElementById("res")
function atualizarPlacar(vencedor) {
  if (vencedor === "X") {
    score++;        // incrementa o valor
    placar1.innerHTML = `X: ${score}`;
  } 
  else if (vencedor === "O") { 
    scoreO++;       // incrementa o valor
    placar2.innerHTML = `O: ${scoreO}`;
  }
}
function verificarVitoria() {
  for (const cond of vitorias) {
    const [a, b, c] = cond;

    if (
      tabuleiro[a] !== "" &&
      tabuleiro[a] === tabuleiro[b] &&
      tabuleiro[a] === tabuleiro[c]
    ) {
      return tabuleiro[a]; // "X" ou "O"
    }
  }
  return null;
}
function clicar(e){
  const cell = e.target;
  const index=Number(cell.dataset.index)
  const hist = document.getElementById("hist")
  if(cell.textContent!=="" || verificarVitoria()!==null){
    return 
    }
  else if(turno%2==1){
      //é a vez do x
      cell.textContent= "X"
      cell.style.color="blue"
      tabuleiro[index] ="X"
      hist.innerHTML+=`${index+1} `
      res.innerHTML ="É a vez do O"
    }
    else{
      cell.textContent ="O"
      cell.style.color="red"
      tabuleiro[index] ="O"
      hist.innerHTML+=`${index+1} `
      res.innerHTML ="É a vez do X"
      }
      const vencedor = verificarVitoria()
      if(vencedor !==null){
        res.innerHTML=`${vencedor} é o vencedor!!!`
        atualizarPlacar(vencedor)
        return
        }
        else if(vencedor == null && turno ==9){
          res.innerHTML=`Empate`
        }
      turno++
}
function reset() {
  // Limpa tabuleiro
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  turno = 1;

  // Limpa visual das células
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.textContent = "");

  // Limpa histórico e resultado
  const hist = document.getElementById("hist");
  const res = document.getElementById("res");
  hist.innerHTML = "Casas selecionadas:";
  res.innerHTML = "Novo jogo! É a vez do X";
}