import { filtroEspecie, filtroGenero, filtroStatus, filtroOrdem, filtroPesquisa, calculaFiltros } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const listaPersonagens = data.results;
const filtroSelecionadoEspecie = document.getElementById("filtro-especies");
const filtroSelecionadoGenero = document.getElementById("filtro-genero");
const filtroSelecionadoStatus = document.getElementById("filtro-status");
const filtroSelecionadoOrdem = document.getElementById("filtro-ordem");
const calculoFiltros = document.getElementById("calculo-filtro");
const filtroBusca = document.getElementById("pesquisa");
const botaoLimpar = document.getElementById("bnt-limpar");

function criarCard (personagem) {
  const divCard = document.createElement('div')
  divCard.classList.add('cards')
  divCard.innerHTML =  `
    <div class="frente-card">
      <img class="img-card" src="${personagem.image}"  alt="cards">
      <p class="nome-personagem"><h3>${personagem.name}</h3></p>
    </div>
    <div class="verso-card">
      <p class="info-verso"><b>Gênero:</b> ${personagem.gender}</p>
      <p class="info-verso"><b>Status:</b> ${personagem.status}</p>
      <p class="info-verso"><b>Espécie:</b> ${personagem.species}</p>
      <p class="info-verso"><b>Origem:</b> ${personagem.origin.name}</p>
      <p class="info-verso"><b>Localização:</b> ${personagem.location.name}</p>
      <p class="info-verso"><b>Aparecem em: </b> ${personagem.episode.length} episódios</p>
    </div>
  `
  function chameiClick(personagem) {
    console.log('cliquei', personagem.name)
  }

  const frenteCard = divCard.querySelector('.frente-card')
  frenteCard.addEventListener('click', () => chameiClick(personagem))
  return divCard
}



function mostrarCards(data) { // innerHTML para mostrar os cards na pagina personagens(html)
  data.map(personagem => {
    const div = criarCard(personagem)
    document.getElementById("mostra-cards").appendChild(div)
  })

}
mostrarCards(listaPersonagens);



function calcularFiltros(listaPersonagens, filtroSelecionado) {
  calculoFiltros.innerHTML = "",
  calculoFiltros.style.display = "block";
  const calculoResultado = calculaFiltros(listaPersonagens, filtroSelecionado);
  calculoFiltros.innerHTML = `Existem ${filtroSelecionado.length} personagens deste filtro, e
  representam ${calculoResultado}% do total dos personagens`
}

function limparFiltros() {
  window.location.reload(); //recarrega a página
}
botaoLimpar.addEventListener("click", limparFiltros);

function filtrarEspecie() {
  const valorSelecionadoEspecie = filtroSelecionadoEspecie.value;
  const selecionadoEspecie = filtroEspecie(listaPersonagens, valorSelecionadoEspecie);
  mostrarCards(selecionadoEspecie);
  calcularFiltros(listaPersonagens,selecionadoEspecie);
}
filtroSelecionadoEspecie.addEventListener('change', filtrarEspecie);

function filtrarGenero() {
  const valorSelecionadoGenero = filtroSelecionadoGenero.value;
  const selecionadoGenero = filtroGenero(listaPersonagens, valorSelecionadoGenero);
  mostrarCards(selecionadoGenero);
  calcularFiltros(listaPersonagens,selecionadoGenero);
}
filtroSelecionadoGenero.addEventListener('change', filtrarGenero);

function filtrarStatus() {
  const valorSelecionadoStatus = filtroSelecionadoStatus.value;
  const selecionadoStatus = filtroStatus(listaPersonagens, valorSelecionadoStatus);
  mostrarCards(selecionadoStatus);
  calcularFiltros(listaPersonagens,selecionadoStatus);
}
filtroSelecionadoStatus.addEventListener('change', filtrarStatus);

function filtrarOrder() {
  const valorSelecionadoOrdem = filtroSelecionadoOrdem.value;
  const selecionadoOrdem = filtroOrdem(listaPersonagens, valorSelecionadoOrdem);
  mostrarCards(selecionadoOrdem);
}
filtroSelecionadoOrdem.addEventListener('change', filtrarOrder);

function filtrarPesquisa() {
  const valorSelecionadoPesquisa = filtroBusca.value;
  const selecionarPesquisa = filtroPesquisa(listaPersonagens, valorSelecionadoPesquisa);
  mostrarCards(selecionarPesquisa);
}
filtroBusca.addEventListener("keyup", filtrarPesquisa);









//O método map() executa uma função em todos os itens de um array e retorna um novo array após a manipulação,
// ou seja, não sobrescreve o array original.
// " => " é chamado de arrow function, que é uma função/callback que possui uma sintaxe + curta, comparada com uma função.
// o "item" foi um parametro criado para puxar os dados do array (array com as informações dos personagens, nome,img etc)
// essa crase "`" é chamada de template string . Template Strings são strings que permitem expressões embutidas.
// Pode utilizar string multi-linhas e interpolação de string com elas.
//O método join() junta todos os elementos de um array em uma string e retorna esta string.
//o padrão do array é separado por vírgula, se tirar o join, os dados dos personagens serão separados por virgulas.
//colocamos as aspas ("") pois não queremos que os dados fiquem separados por virgula
