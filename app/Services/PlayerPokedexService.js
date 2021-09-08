import { ProxyState } from "../AppState.js"
import { PlayerPokedex } from "../Models/PlayerPokedex.js"

// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class PlayerPokedexService{
async catchPokemon(){
  const playerPokemon = new PlayerPokedex(ProxyState.currentPokemon)
  let res = await sandboxApi.post(`${ProxyState.user}/pokemon`, playerPokemon)
  ProxyState.caughtPokemon = [...ProxyState.caughtPokemon, new PlayerPokedex(res.data)]
  console.log(ProxyState.caughtPokemon)
}

async getCaughtPokemon(){
  let res = await sandboxApi.get(`${ProxyState.user}/pokemon`)
  console.log(res)
  ProxyState.caughtPokemon= res.data.map(p => new PlayerPokedex(p))
}
}

export const playerPokedexService = new PlayerPokedexService()