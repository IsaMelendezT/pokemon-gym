// tests/Pokemon.test.ts
import { Pokemon } from '../src/models/Pokemon';
import { BattleStats } from '../src/models/Pokemon';

describe('Pokemon Model', () => {
  let bulbasaur: Pokemon;

  beforeEach(() => {
    bulbasaur = new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 5, false, ['Ivysaur', 'Venusaur']);
  });

  test('should create a Pokemon instance correctly', () => {
    expect(bulbasaur).toBeInstanceOf(Pokemon);
    expect(bulbasaur.id).toBe(1);
    expect(bulbasaur.name).toBe('Bulbasaur');
    expect(bulbasaur.type).toEqual(['Grass', 'Poison']);
    expect(bulbasaur.level).toBe(5);
    expect(bulbasaur.evolved).toBe(false);
    expect(bulbasaur.evolutions).toEqual(['Ivysaur', 'Venusaur']);
    expect(bulbasaur.battleStats).toEqual({ wins: 0, losses: 0, draws: 0 });
  });

  test('should level up the Pokemon correctly', () => {
    const initialLevel = bulbasaur.level;
    bulbasaur.levelUp();
    expect(bulbasaur.level).toBe(initialLevel + 1);
  });

  test('should evolve the Pokemon if possible', () => {
    const initialEvolutionStatus = bulbasaur.evolved;
    const evolutionResult = bulbasaur.evolve();
    expect(evolutionResult).toBe(true);
    expect(bulbasaur.evolved).toBe(true);
  });

  test('should not evolve the Pokemon if already evolved', () => {
    bulbasaur.evolve(); // First evolution
    const evolutionResult = bulbasaur.evolve(); // Trying to evolve again
    expect(evolutionResult).toBe(false);
    expect(bulbasaur.evolved).toBe(true);
  });

  test('should record battle result correctly (win)', () => {
    const initialStats = { ...bulbasaur.battleStats };
    bulbasaur.recordBattleResult('win');
    expect(bulbasaur.battleStats.wins).toBe(initialStats.wins + 1);
  });

  test('should record battle result correctly (loss)', () => {
    const initialStats = { ...bulbasaur.battleStats };
    bulbasaur.recordBattleResult('loss');
    expect(bulbasaur.battleStats.losses).toBe(initialStats.losses + 1);
  });

  test('should record battle result correctly (draw)', () => {
    const initialStats = { ...bulbasaur.battleStats };
    bulbasaur.recordBattleResult('draw');
    expect(bulbasaur.battleStats.draws).toBe(initialStats.draws + 1);
  });
});