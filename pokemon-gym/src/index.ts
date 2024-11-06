// src/index.ts
import { TrainerService } from './services/TrainerService';
import { PokedexService } from './services/PokedexService';
import { Battle } from './models/Battle';

const trainerService = new TrainerService();
const pokedexService = new PokedexService();

const ash = trainerService.getTrainerByName("Ash");
const bulbasaur = pokedexService.getPokemonById(1);
const charmander = pokedexService.getPokemonById(2);

if (ash && bulbasaur && charmander) {
  trainerService.addPokemonToTrainer("Ash", bulbasaur);
  trainerService.addPokemonToTrainer("Ash", charmander);

  const battleResult = Battle.conductBattle(bulbasaur, charmander);
  console.log(`Battle Result:`, battleResult);
}