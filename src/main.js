import { filtroEspecie, filtroGenero, filtroStatus, filtroOrdem, filtroPesquisa, calculaPorcentagem } from './data.js';
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
  const divCard = document.createElement('ul')
  divCard.classList.add('cards')
  divCard.innerHTML =  `
    <div class="frente-card">
      <img class="img-card" src="${personagem.image}"  alt="cards">
      <p class="nome-personagem">${personagem.name}</p>
    </div>
    <div class="verso-card">
      <ul class="info-verso">
      <li><b>Gênero:</b> ${personagem.gender}</li>
      <li><b>Status:</b> ${personagem.status}</li>
      <li><b>Espécie:</b> ${personagem.species}</li
      <li><b>Localização:</b> ${personagem.location.name}</li>
      <li><b>Episódios:</b> ${personagem.episode.map((i) => i.replaceAll(/[^\d$]/g, " "))}</li>
      </>
    </div>
  `

  function mostrarVerso() {
    divCard.classList.toggle('mostra-verso');
  }

  divCard.addEventListener('click', mostrarVerso)
  return divCard
}

function mostrarCards(data) {
  const conteiner = document.getElementById("mostra-cards");
  conteiner.innerHTML = "";
  data.map(personagem => {
    const div = criarCard(personagem)
    conteiner.appendChild(div)
  })
}
mostrarCards(listaPersonagens);

function calcularFiltros(listaPersonagens, filtroSelecionado) {
  calculoFiltros.innerHTML = "";
  calculoFiltros.style.display = "block";
  calculoFiltros.innerHTML = `Existem ${filtroSelecionado.length} personagens deste filtro, e
  representam ${calculaPorcentagem(listaPersonagens.length, filtroSelecionado.length)}% do total dos personagens`
}

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

function limparFiltros() {
  window.location.reload(); //recarrega a página
}
botaoLimpar.addEventListener("click", limparFiltros);
