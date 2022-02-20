// import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


// console.log(example, data);
function mostrarCards(data) { // innerHTML para mostrar os cards na pagina personagens(html)
  document.getElementById("mostra-cards").innerHTML = data.map((item) => `
  <div class="cards">
    <div class="frente-card">
      <img class="img-card" src="${item.image}">
      <p class="nome-personagem">Nome: ${item.name}</p>
    </div>
   <div class="verso-card">
      <p class="info-verso">Gênero: ${item.gender}</p>
      <p class="info-verso">Status: ${item.status}</p>
      <p class="info-verso">Espécie: ${item.species}</p>
      <p class="info-verso">Origem: ${item.origin.name}</p>
      <p class="info-verso">Localização: ${item.location.name}</p>
      <p class="info-verso">Episódios:</p>
    </div>
  </div>
  `)
   .join("");

}
mostrarCards(data.results);
//console.log(data);

 //O método map() executa uma função em todos os itens de um array e retorna um novo array após a manipulação,
// ou seja, não sobrescreve o array original.
// " => " é chamado de arrow function, que é uma função/callback que possui uma sintaxe + curta, comparada com uma função.
// o "item" foi um parametro criado para puxar os dados do array (array com as informações dos personagens, nome,img etc)
// essa crase "`" é chamada de template string . Template Strings são strings que permitem expressões embutidas.
// Pode utilizar string multi-linhas e interpolação de string com elas.
//O método join() junta todos os elementos de um array em uma string e retorna esta string.
//o padrão do array é separado por vírgula, se tirar o join, os dados dos personagens serão separados por virgulas.
//colocamos as aspas ("") pois não queremos que os dados fiquem separados por virgula
