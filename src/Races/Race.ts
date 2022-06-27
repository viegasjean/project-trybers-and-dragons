export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Object.assign(this, { _name, _dexterity });
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}