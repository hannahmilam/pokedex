import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";

function _drawPokemonDetails(){ 
document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon.Template
}
export class PokeDetailsController{
  constructor(){
    ProxyState.on('currentPokemon', _drawPokemonDetails)
  }

  async getPokemonDetails(url){
    try {
      await pokeApiService.getPokemonDetails(url)
    } catch (error) {
      console.log(error)
    }
  }
}