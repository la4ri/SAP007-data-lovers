
import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { filtroGenero, filtroStatus, filtroOrdem } from '../src/data.js';

const personagens = [
  {
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female"
  },
  {
    "name": "Steven Phillips",
    "status": "Alive",
    "species": "Alien",
    "gender": "Male",
  },
  {
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
    "gender": "Male"
  },
  {
    "name": "Diane Sanchez",
    "status": "unknown",
    "species": "Human",
    "gender": "Female",
  }
]

describe('filtroGenero', () => {
  it('função do filtro genero', () => {
    expect(typeof filtroGenero).toBe('function');
  });
  it('retorna somente os personagens "Feminino", quando selecionado "Female"', () => {
    const resultadoEsperado = [{ "name": "Beth Smith", "status": "Alive", "species": "Human", "gender": "Female"},
    {"name": "Diane Sanchez", "status": "unknown", "species": "Human", "gender": "Female"}];
    const personagensFiltrados = filtroGenero(personagens, 'Female')
    expect(personagensFiltrados).toEqual(resultadoEsperado)
  });
});

describe('filtroStatus', () => {
  it('função do filtro status ', () => {
    expect(typeof filtroStatus).toBe('function');
  });
  it('retorna somente os personagens "Vivo", quando selecionado "Alive"', () => {
    const resultadoEsperado = [{"name": "Beth Smith", "status": "Alive", "species": "Human", "gender": "Female"},
    {"name": "Steven Phillips", "status": "Alive","species": "Alien", "gender": "Male"}]
    const personagensFiltrados = filtroStatus(personagens, 'Alive')
    expect(personagensFiltrados).toEqual(resultadoEsperado)
  });
})

const nomesPersonagens = [
  {"name": "Beth Smith"},
  {"name": "Steven Phillips"},
  {"name": "Aqua Morty"},
  {"name": "Diane Sanchez"}
];

const nomesOrdemAZ = [
  {"name": "Aqua Morty"},
  {"name": "Beth Smith"},
  {"name": "Diane Sanchez"},
  {"name": "Steven Phillips"}
];

const nomesOrdemZA = [
  {"name": "Steven Phillips"},
  {"name": "Diane Sanchez"},
  {"name": "Beth Smith"},
  {"name": "Aqua Morty"}
];

describe('filtroOrdem', () => {
  it('função do filtro ordenação de A - Z', () => {
    expect(typeof filtroOrdem).toBe('function');
  });
  it('retorna os personagens ordenados de "A-Z", quando selecionado "A-Z"', () => {
    const personagensFiltrados = filtroOrdem(nomesPersonagens, "az")
    expect(personagensFiltrados).toEqual(nomesOrdemAZ)
  });
  it('retorna os personagens ordenados de "Z-A", quando selecionado "Z-A"', () => {
    const personagensFiltrados = filtroOrdem(nomesPersonagens, "za")
    expect(personagensFiltrados).toEqual(nomesOrdemZA)
  });
})

//.toEqual() Simplesmente verifica se duas coisas são iguais (e não necessariamente o mesmo objeto)
// .toStrictEqual : Use para testar que os objetos têm os mesmos tipos, bem como estrutura.
