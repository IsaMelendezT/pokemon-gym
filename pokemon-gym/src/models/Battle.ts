import { Pokemon } from './Pokemon';

export interface BattleResult {
  winner: Pokemon | null;
  loser: Pokemon | null;
  isDraw: boolean;
}

export class Battle {
  static conductBattle(pokemon1: Pokemon, pokemon2: Pokemon): BattleResult {
    // Simple battle logic based on level (could be extended)
    if (pokemon1.level > pokemon2.level) {
      pokemon1.recordBattleResult('win');
      pokemon2.recordBattleResult('loss');
      return { winner: pokemon1, loser: pokemon2, isDraw: false };
    } else if (pokemon1.level < pokemon2.level) {
      pokemon2.recordBattleResult('win');
      pokemon1.recordBattleResult('loss');
      return { winner: pokemon2, loser: pokemon1, isDraw: false };
    } else {
      pokemon1.recordBattleResult('draw');
      pokemon2.recordBattleResult('draw');
      return { winner: null, loser: null, isDraw: true };
    }
  }
}