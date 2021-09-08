import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawPokemon(){
let template = ''
ProxyState.pokedex.forEach(p => template += p.Template)
document.getElementById('api-pokemon').innerHTML = template
}
export class PokeApiController{
  constructor(){
    ProxyState.on('pokedex', _drawPokemon)
    pokeApiService.getPokemon()
    }

  async getPokemon(){
    try {
      await pokeApiService.getPokemon()
    } catch (error) {
      
    }
  }
}