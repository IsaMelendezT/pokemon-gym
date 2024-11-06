// src/models/Pokemon.ts
export interface Pokemon {
    id: number;
    name: string;
    type: string[];
    level: number;
    evolved: boolean;
    evolutions: string[];
    battleStats: BattleStats;
  }
  
  export interface BattleStats {
    wins: number;
    losses: number;
    draws: number;
  }
  
  export class Pokemon implements Pokemon {
    constructor(
      public id: number,
      public name: string,
      public type: string[],
      public level: number,
      public evolved: boolean,
      public evolutions: string[],
      public battleStats: BattleStats = { wins: 0, losses: 0, draws: 0 }
    ) {}
  
    levelUp(): void {
      this.level++;
    }
  
    evolve(): boolean {
      if (!this.evolved && this.evolutions.length > 0) {
        this.evolved = true;
        return true;
      }
      return false;
    }
  
    recordBattleResult(result: 'win' | 'loss' | 'draw'): void {
      if (result === 'win') this.battleStats.wins++;
      if (result === 'loss') this.battleStats.losses++;
      if (result === 'draw') this.battleStats.draws++;
    }
  }
  