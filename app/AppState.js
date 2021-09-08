import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  user = 'Hannah'
  /** @type {import('./Models/PokedexApi.js').PokedexApi[]} */
  pokedex = []
  /** @type {import('./Models/PokeDetail.js').PokeDetail[]} */
  currentPokemon = null
  /** @type {import('./Models/PlayerPokedex.js').PlayerPokedex[]} */
  caughtPokemon = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
