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
  const resultadoPesquisa = listaPersonagens.filter((personagem) => personagem.name.toLowerCase().includes(acharValor.toLowerCase()));
  return resultadoPesquisa;
};

export const calculaPorcentagem = (total, selecionado) => {
  const percentage = Math.round((selecionado * 100) / total);
  return percentage;
};
