// tests/Battle.test.ts
import { Battle } from '../src/models/Battle';
import { Pokemon } from '../src/models/Pokemon';

describe('Battle Model', () => {
  let bulbasaur: Pokemon;
  let charmander: Pokemon;

  beforeEach(() => {
    bulbasaur = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 5, false, ['Ivysaur', 'Venusaur']);
    charmander = new Pokemon(2, 'Charmander', ['Fire'], 5, false, ['Charmeleon', 'Charizard']);
  });

  test('should return a draw if both Pokemons are at the same level', () => {
    const result = Battle.conductBattle(bulbasaur, charmander);
    expect(result.isDraw).toBe(true);
    expect(result.winner).toBeNull();
    expect(result.loser).toBeNull();
  });

  test('should return Bulbasaur as the winner if it has a higher level', () => {
    charmander.level = 4; // Lower the level of Charmander
    const result = Battle.conductBattle(bulbasaur, charmander);
    expect(result.isDraw).toBe(false);
    expect(result.winner).toBe(bulbasaur);
    expect(result.loser).toBe(charmander);
  });

  test('should return Charmander as the winner if it has a higher level', () => {
    bulbasaur.level = 4; // Lower the level of Bulbasaur
    const result = Battle.conductBattle(bulbasaur, charmander);
    expect(result.isDraw).toBe(false);
    expect(result.winner).toBe(charmander);
    expect(result.loser).toBe(bulbasaur);
  });
});