'use strict'

const POKEMONS = {
  bulbassauro: {
    indice: 1,
    tipo: 'grama'
  },
  charmander: {
    indice: 4,
    tipo: 'fogo'
  },
  squirtle: {
    indice: 7,
    tipo: 'agua'
  }
}

const UNKNOWN = {
  indice: 'desconhecido',
  tipo: 'desconhecido'
}

const info = pokemon => {
  return POKEMONS[pokemon] || UNKNOWN;
}

module.exports = {
  info: info
}
