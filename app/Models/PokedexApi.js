export class PokedexApi {
  constructor(pokeData){
    this.name = pokeData.name 
    this.url = pokeData.url
  }
  get Template(){
    return /*html*/ `
    <li class="list-group-item py-2 selectable" onclick="app.pokeDetailsController.getPokemonDetails('${this.url}')">${this.name}</li>
    `
  }
}