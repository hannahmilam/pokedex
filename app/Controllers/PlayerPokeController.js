import { ProxyState } from "../AppState.js"
import { playerPokedexService } from "../Services/PlayerPokedexService.js"


function _drawPokemon(){
  let template = ""
  ProxyState.caughtPokemon.forEach(p => template += p.Template)
  document.getElementById('caught-pokemon').innerHTML = template
}
export class PlayerPokeController{
  constructor(){
  ProxyState.on('caughtPokemon',_drawPokemon)
  this.getCaughtPokemon()
  }
  async catchPokemon(){
    try {
      await playerPokedexService.catchPokemon()
    } catch (error) {
      console.log('⚠ CATCH_POKEMON', error)
    }
  }

  async getCaughtPokemon(){
    try {
      await playerPokedexService.getCaughtPokemon()
    } catch (error) {
      console.log('⚠ GET_CAUGHT', error)
    }
  }
}