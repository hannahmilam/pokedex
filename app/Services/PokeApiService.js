import { ProxyState } from "../AppState.js"
import { PokeDetail } from "../Models/PokeDetail.js"
import { PokedexApi } from "../Models/PokedexApi.js"


// @ts-ignore
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

class PokeApiService{
async getPokemonDetails(url){
let res = await pokeApi.get(url)
console.log(res.data)
ProxyState.currentPokemon = new PokeDetail(res.data)
}
  async getPokemon(){
    let res = await pokeApi.get('pokemon')
    console.log(res.data.results)
    ProxyState.pokedex = res.data.results.map(p => new PokedexApi(p))
  }
}

export const pokeApiService = new PokeApiService()