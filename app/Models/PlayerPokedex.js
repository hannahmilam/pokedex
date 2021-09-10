export class PlayerPokedex{

  constructor(pokeData){
    this.id = pokeData.id
    this.name = pokeData.name 
    this.img = pokeData.img
    this.types = pokeData.types 
    this.user = pokeData.user
  }
  get Template(){
    return /*html*/ `
    <li class="list-group-item py-2 selectable"> ${this.name} </li>
    `
  }
}