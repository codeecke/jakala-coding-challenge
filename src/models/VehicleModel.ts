import { apiLoader } from '../helper/apiLoader'
import { Vehicle } from '../types/Vehicle'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PeopleModel } from './PeopleModel'

export class VehicleModel extends AbstractModel {
  public readonly id: number
  public readonly name: string
  public readonly films: FilmModel[] = []
  public readonly created: string
  public readonly edited: string
  public readonly url: string
  public readonly pilots: PeopleModel[] = []
  public readonly model: string
  public readonly manufacturer: string
  public readonly costInCredits: number
  public readonly length: number
  public readonly maxAtmospheringSpeed: number
  public readonly crew: number
  public readonly passengers: number
  public readonly cargoCapacity: number
  public readonly consumables: string
  public readonly vehicleClass: string

  constructor(apiData: Vehicle, autoload: boolean = false) {
    super()
    const films = apiData.films
    const pilots = apiData.pilots

    this.id = this.getIdFromApiUrl(apiData.url) || 0
    this.name = apiData.name
    this.created = apiData.created
    this.edited = apiData.edited
    this.url = apiData.url
    this.model = apiData.model
    this.manufacturer = apiData.manufacturer
    this.costInCredits = this.convertStringToNumber(apiData.cost_in_credits)
    this.length = this.convertStringToNumber(apiData.length)
    this.maxAtmospheringSpeed = this.convertStringToNumber(
      apiData.max_atmosphering_speed
    )
    this.crew = this.convertStringToNumber(apiData.crew)
    this.passengers = this.convertStringToNumber(apiData.passengers)
    this.cargoCapacity = this.convertStringToNumber(apiData.cargo_capacity)
    this.consumables = apiData.consumables
    this.vehicleClass = apiData.vehicle_class

    if (films && autoload) {
      films.forEach(async (filmUri) => {
        const id = this.getIdFromApiUrl(filmUri)
        if (!id) return
        const film = await apiLoader.fetchFilmById(id, false)
        this.films.push(film)
      })
    }

    if (pilots && autoload) {
      pilots.forEach(async (pilotUri) => {
        const id = this.getIdFromApiUrl(pilotUri)
        if (!id) return
        const pilot = await apiLoader.fetchPersonById(id)
        this.pilots.push(pilot)
      })
    }
  }

  getLabel(key: string): string {
    const labels = {
      name: 'Name',
      films: 'Films',
      url: 'API',
      pilots: 'Pilots',
      model: 'Model',
      manufacturer: 'Manufacturer',
      costInCredits: 'Cost',
      length: 'Length',
      maxAtmospheringSpeed: 'Max atmosphering speed',
      crew: 'Crew',
      passengers: 'Passengers',
      cargoCapacity: 'Cargo capacity',
      consumables: 'Consumables',
      vehicleClass: 'Vehicle class'
    }
    return labels[key]
  }
  public toString(): string {
    return this.name
  }
  public getDetailLink(): string {
    return '/vehicles/' + this.id
  }

  public format(key: string) {
    const value = super.format(key)
    switch (key) {
      case 'costInCredits':
        return isNaN(value) ? 'unknown' : value + ' credits'
      case 'length':
        return value + ' m'
      case 'crew':
        return value === 0 ? 'none' : value + ' persons'
      case 'passengers':
        return value === 0 ? 'none' : value + ' persons'
      case 'cargoCapacity':
        return value + ' kg'
      default:
        return value
    }
  }
}
