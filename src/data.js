export const filtrarGenero = (mostrarCards, gender) => {
  let genero = mostrarCards.filter((item) => {
    return item.gender === gender;
  });
  return genero;
};
export const anotherExample = () => {
  return 'OMG';
};
