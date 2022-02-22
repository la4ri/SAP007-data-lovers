export const filtroEspecie = (listaPersonagens, especie) => {
  const resultadoEspecie = listaPersonagens.filter((personagem) => personagem.species.toLowerCase() === especie.toLowerCase());
  return resultadoEspecie;
};

export const filtrarGenero = (mostrarCards, gender) => {
  let genero = mostrarCards.filter((item) => {
    return item.gender === gender;
  });
  return genero;
};
export const anotherExample = () => {
  return 'OMG';
};
