// src/utils/types.ts

// Enum for Battle Result Types
export enum BattleResultType {
    WIN = 'win',
    LOSS = 'loss',
    DRAW = 'draw',
  }
  
  // Interface for Battle Stats
  export interface BattleStats {
    wins: number;
    losses: number;
    draws: number;
  }
  
  // Enum for Pokémon Types
  export enum PokemonType {
    GRASS = 'Grass',
    POISON = 'Poison',
    FIRE = 'Fire',
    WATER = 'Water',
    ELECTRIC = 'Electric',
    ROCK = 'Rock',
    // Add more as needed
  }
  
  // General interface for Pokémon Evolution Stages
  export interface EvolutionStage {
    stage: number;
    evolvedName: string;
  }
  
  // Utility Type for Pokémon Attributes
  export interface PokemonAttributes {
    id: number;
    name: string;
    types: PokemonType[];
    level: number;
    evolved: boolean;
    evolutions: EvolutionStage[];
    battleStats: BattleStats;
  }