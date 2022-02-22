export const filtroEspecie = (listaPersonagens, especie) => {
  const resultadoEspecie = listaPersonagens.filter((personagem) => personagem.species.toLowerCase() === especie.toLowerCase());
  return resultadoEspecie;
};

export const filtroGenero = (listaPersonagens, gender) => {
  const resultadoGenero = listaPersonagens.filter((personagem) => personagem.gender.toLowerCase() === gender.toLowerCase());
    return resultadoGenero;
};
export const filtroStatus = (listaPersonagens, status) => {
  const resultadoStatus = listaPersonagens.filter((personagem) => personagem.status.toLowerCase() === status.toLowerCase());
  return resultadoStatus;
};

