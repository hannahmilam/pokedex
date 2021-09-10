export class PokeDetail{
  constructor(pokeData){
    this.url = pokeData.url
    this.name = pokeData.name
    this.types = pokeData.types
    this.stats = pokeData.stats
    this.sprites = pokeData.sprites.front_default
    this.species = pokeData.species.name
    this.abilities = pokeData.abilities
  }

  get Template(){
    return /*html*/`
    <div class="card my-3 shadow">
    <div class="card-header">
    <h3><img src="${this.sprites}" class="img-fluid" height="45" alt=""> ${this.name.toUpperCase()}</h3>
    </div>
    <div class="card-body">
    <ul>
    <li><b>Poke Types: </b>${this.Types}</li>
    <li><b>Poke Species: </b>${this.species}</li>
    <li><b>Poke Stats: </b><br>${this.Stats}</li>
    <li><b>Poke Abilities:</b> ${this.Abilities}</li>
    </ul>
    </div>
    <div class="card-footer">
    <span class="ms-4">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <img src="./assets/img/PokeBall.png" class="selectable" height="40px" alt="" onclick="app.playerPokeController.catchPokemon()">
    <span>
    </div>
  </div>
    `
  }

  get Types(){
    let template = ''
    let elemTypes = this.types
    elemTypes.forEach(t => template += `<span>${t.type.name} </span>`)
    return template
  }

  get Stats(){
    let template = ''
    let elemStats = this.stats
    elemStats.forEach(t => template += `<span>${t.stat.name}: ${t.base_stat}</span><br>`)
    return template
  }
  get Abilities(){
    let template = ''
    let elemAbilities = this.abilities
    elemAbilities.forEach(t => template += `<span>${t.ability.name} </span>`)
    return template
  }
}