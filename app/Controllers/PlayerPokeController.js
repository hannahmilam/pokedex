import { playerPokedexService } from "../Services/PlayerPokedexService.js"

export class PlayerPokeController{
  constructor(){

  }
  async catchPokemon(){
    try {
      await playerPokedexService.catchPokemon()
    } catch (error) {
      console.log(error)
    }
  }
}