import { AbstractModel } from './AbstractModel'

export class StarshipModel extends AbstractModel {
  getLabel(key: string): string {
    throw new Error('Method not implemented.')
  }
  toString(): string {
    throw new Error('Method not implemented.')
  }
  getDetailLink(): string {
    throw new Error('Method not implemented.')
  }
}
