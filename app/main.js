import { PlayerPokeController } from "./Controllers/PlayerPokeController.js";
import { PokeApiController } from "./Controllers/PokeApiController.js";
import { PokeDetailsController } from "./Controllers/PokeDetailsController.js";


class App {
 pokeApiController = new PokeApiController()
 pokeDetailsController = new PokeDetailsController()
 playerPokeController = new PlayerPokeController()
}

window["app"] = new App();
