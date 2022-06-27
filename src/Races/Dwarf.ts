import Race from './Race';

export default class Dwarf extends Race {
  private static raceCount = 0;
  private _maxLifePoints;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.createRaceInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static createRaceInstance() {
    this.raceCount += 1;
  }

  static createdRacesInstances() {
    return this.raceCount;
  }
}