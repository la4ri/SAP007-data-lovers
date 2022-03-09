export const filtroEspecie = (listaPersonagens, especie) => {
  const resultadoEspecie = listaPersonagens.filter((personagem) => personagem.species.toLowerCase() === especie.toLowerCase());
  return resultadoEspecie;
};

export const filtroGenero = (listaPersonagens, genero) => {
  const resultadoGenero = listaPersonagens.filter((personagem) => personagem.gender.toLowerCase() === genero.toLowerCase());
  return resultadoGenero;
};

export const filtroStatus = (listaPersonagens, status) => {
  const resultadoStatus = listaPersonagens.filter((personagem) => personagem.status.toLowerCase() === status.toLowerCase());
  return resultadoStatus;
};

export const filtroOrdem = (listaPersonagens, ordem) => {
  const copiaListaPersonagens = [...listaPersonagens] // "..." Spread - este operador é usado para ‘espalhar’ os elementos de um array
  if (ordem === "az") {
    return copiaListaPersonagens.sort((a, b) => a.name > b.name ? 1 : -1)
  } else {
    return copiaListaPersonagens.sort((a, b) => a.name > b.name ? -1 : 1)
  }
};

export const filtroPesquisa = (listaPersonagens, acharValor) => {
  const resultadoPesquisa = listaPersonagens.filter(personagem => personagem.name.toLowerCase().includes(acharValor.toLowerCase()));
  return resultadoPesquisa;
};

export const calculaFiltros = (listaPersonagens, filtroSelecionado) => {
  const resultadoCalculo = parseFloat((filtroSelecionado.length * 100) / listaPersonagens.length).toFixed(2);
  return resultadoCalculo;
};

// toLowerCase() retorna o valor da string que foi chamada convertido para minúsculo
// Ex: A especie, gernero e status a primeira letra é maiuscula
// O método sort() ordena os elementos do próprio array e retorna o array.
// operador ternário - funciona com o mesmo conceito do if e else
// A sintaxe é: {condição} ? {expressão se verdadeiro} : {expressão se falso} s
// condição ? a : b
