import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static archetypeCount = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.createArchetypeInstance();
  }

  private static createArchetypeInstance() {
    this.archetypeCount += 1;
  }

  static createdArchetypeInstances() {
    return this.archetypeCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}