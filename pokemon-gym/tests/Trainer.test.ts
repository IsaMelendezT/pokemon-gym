// tests/Trainer.test.ts
import { Trainer } from '../src/models/Trainer';
import { Pokemon } from '../src/models/Pokemon';

describe('Trainer Model', () => {
  let ash: Trainer;
  let bulbasaur: Pokemon;
  let charmander: Pokemon;

  beforeEach(() => {
    ash = new Trainer(1, 'Ash');
    bulbasaur = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 5, false, ['Ivysaur', 'Venusaur']);
    charmander = new Pokemon(2, 'Charmander', ['Fire'], 5, false, ['Charmeleon', 'Charizard']);
  });

  test('should create a Trainer instance correctly', () => {
    expect(ash).toBeInstanceOf(Trainer);
    expect(ash.id).toBe(1);
    expect(ash.name).toBe('Ash');
    expect(ash.pokemons).toEqual([]);
  });

  test('should add a Pokemon to the Trainer', () => {
    ash.addPokemon(bulbasaur);
    expect(ash.pokemons.length).toBe(1);
    expect(ash.pokemons[0]).toBe(bulbasaur);
  });

  test('should get a Pokemon by ID from the Trainer', () => {
    ash.addPokemon(bulbasaur);
    const pokemon = ash.getPokemon(1);
    expect(pokemon).toBe(bulbasaur);
  });

  test('should return undefined when getting a non-existent Pokemon by ID', () => {
    const pokemon = ash.getPokemon(999);
    expect(pokemon).toBeUndefined();
  });
});