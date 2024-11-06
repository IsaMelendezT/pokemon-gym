// src/services/TrainerService.ts
import { Trainer } from '../models/Trainer';
import { Pokemon } from '../models/Pokemon';
import * as trainerData from '../data/trainers.json';

export class TrainerService {
  private trainers: Trainer[] = trainerData;

  getTrainerByName(name: string): Trainer | undefined {
    return this.trainers.find(trainer => trainer.name === name);
  }

  addTrainer(trainer: Trainer): void {
    this.trainers.push(trainer);
  }

  addPokemonToTrainer(trainerName: string, pokemon: Pokemon): boolean {
    const trainer = this.getTrainerByName(trainerName);
    if (trainer) {
      trainer.addPokemon(pokemon);
      return true;
    }
    return false;
  }
}