// src/models/Trainer.ts
import { Pokemon } from './Pokemon';

export class Trainer {
  constructor(
    public id: number,
    public name: string,
    public pokemons: Pokemon[] = []
  ) {}

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  getPokemon(id: number): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }
}