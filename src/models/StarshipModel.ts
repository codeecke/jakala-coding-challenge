import { apiLoader } from '../helper/apiLoader'
import { Starship } from '../types/Starship'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PeopleModel } from './PeopleModel'

export class StarshipModel extends AbstractModel {
  public readonly id: number
  public readonly cargoCapacity: number
  public readonly consumables: string
  public readonly costInCredits: number
  public readonly created: string
  public readonly crew: number
  public readonly edited: string
  public readonly films: FilmModel[] = []
  public readonly hyperdriveRating: string
  public readonly length: number
  public readonly manufacturer: string
  public readonly maxAtmospheringSpeed: number
  public readonly MGLT: string
  public readonly model: string
  public readonly name: string
  public readonly passengers: number
  public readonly pilots: PeopleModel[] = []
  public readonly starshipClass: string
  public readonly url: string

  constructor(apiData: Starship, autoload: boolean = false) {
    super()
    const films = apiData.films
    const pilots = apiData.pilots

    this.id = this.getIdFromApiUrl(apiData.url) || 0
    this.cargoCapacity = this.convertStringToNumber(apiData.cargo_capacity)
    this.consumables = apiData.consumables
    this.costInCredits = this.convertStringToNumber(apiData.cost_in_credits)
    this.created = apiData.created
    this.crew = this.convertStringToNumber(apiData.crew)
    this.edited = apiData.edited
    this.hyperdriveRating = apiData.hyperdrive_rating
    this.length = this.convertStringToNumber(apiData.length)
    this.manufacturer = apiData.manufacturer
    this.maxAtmospheringSpeed = this.convertStringToNumber(
      apiData.max_atmosphering_speed
    )
    this.MGLT = apiData.MGLT
    this.model = apiData.model
    this.name = apiData.name
    this.passengers = this.convertStringToNumber(apiData.passengers)
    this.starshipClass = apiData.starship_class
    this.url = apiData.url

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
      cargoCapacity: 'Cargo capacity',
      consumables: 'Consumables',
      costInCredits: 'Cost',
      crew: 'Crew',
      edited: 'Edited',
      films: 'Films',
      hyperdriveRating: 'Hyperdrive rating',
      length: 'Length',
      manufacturer: 'Manufacturer',
      maxAtmospheringSpeed: 'Max atmosphering speed',
      MGLT: 'MGLT',
      model: 'Model',
      name: 'Name',
      passengers: 'Passengers',
      pilots: 'Pilots',
      starshipClass: 'Starship class',
      url: 'API',
    }
    return labels[key]
  }
  toString(): string {
    return this.name
  }
  getDetailLink(): string {
    return '/starships/' + this.id
  }
}
