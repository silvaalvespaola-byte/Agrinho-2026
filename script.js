// 1. Seleciona o elemento (o botão que criamos no HTML)
const botao = document.querySelector('.botao-principal');

// 2. Cria a função que será executada
function aoClicar() {
  // Muda o texto do botão
  botao.innerHTML = "✅ Enviado!";
  
  // Muda a cor de fundo direto pelo JS
  botao.style.backgroundColor = "#8e44ad"; 
  
  // Exibe um alerta na tela
  alert("Opa! Você ativou o JavaScript com sucesso!");
}

// 3. Adiciona um "Ouvinte" que fica esperando o clique
botao.addEventListener('click', aoClicar);