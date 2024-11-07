// tests/TrainerService.test.ts
import { TrainerService } from '../src/services/TrainerService';
import { Trainer } from '../src/models/Trainer';
import { Pokemon } from '../src/models/Pokemon';

describe('TrainerService', () => {
  let trainerService: TrainerService;
  let ash: Trainer;
  let bulbasaur: Pokemon;

  beforeEach(() => {
    trainerService = new TrainerService();
    ash = new Trainer(1, 'Ash');
    bulbasaur = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 5, false, ['Ivysaur', 'Venusaur']);
  });

  test('should get a trainer by name', () => {
    trainerService.addTrainer(ash);
    const foundTrainer = trainerService.getTrainerByName('Ash');
    expect(foundTrainer).toBeDefined();
    expect(foundTrainer?.name).toBe('Ash');
  });

  test('should return undefined if trainer is not found by name', () => {
    const foundTrainer = trainerService.getTrainerByName('Brock');
    expect(foundTrainer).toBeUndefined();
  });

  test('should add a Pokemon to a Trainer', () => {
    trainerService.addTrainer(ash);
    const result = trainerService.addPokemonToTrainer('Ash', bulbasaur);
    expect(result).toBe(true);
    expect(ash.pokemons.length).toBe(1);
  });

  test('should not add Pokemon to a non-existent Trainer', () => {
    const result = trainerService.addPokemonToTrainer('Gary', bulbasaur);
    expect(result).toBe(false);
  });
});