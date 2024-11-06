// src/services/PokedexService.ts
import { Pokemon } from '../models/Pokemon';
import * as pokedexData from '../data/pokedex.json';

export class PokedexService {
  private pokedex: Pokemon[] = pokedexData;

  getPokemonById(id: number): Pokemon | undefined {
    return this.pokedex.find(pokemon => pokemon.id === id);
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokedex.push(pokemon);
  }

  updatePokemon(pokemon: Pokemon): void {
    const index = this.pokedex.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.pokedex[index] = pokemon;
    }
  }
}