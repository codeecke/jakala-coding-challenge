import { z } from 'zod'
import { apiLoader } from '../helper/apiLoader'
import { People } from '../types'
import { genderValidator } from '../zod/genderValidator'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PlanetModel } from './PlanetModel'
import { SpeciesModel } from './SpeciesModel'
import { VehicleModel } from './VehicleModel'
import { StarshipModel } from './StarshipModel'

export class PeopleModel extends AbstractModel {
  public readonly id: number
  public readonly name: string
  public readonly height: number
  public readonly mass: number
  public readonly hairColor: string
  public readonly skinColor: string
  public readonly eyeColor: string
  public readonly birthYear: string
  public readonly gender: z.infer<typeof genderValidator>
  public homeworld: PlanetModel
  public readonly films: FilmModel[] = []
  public readonly species: SpeciesModel[] = []
  public readonly vehicles: VehicleModel[] = []
  public readonly starships: StarshipModel[] = []
  public readonly created: Date
  public readonly edited: Date
  public readonly url: string

  constructor(apiData: People, autoload: boolean = false) {
    super()

    const homeworld = this.getIdFromApiUrl(apiData.homeworld)
    const films = apiData.films
    const species = apiData.species
    const vehicles = apiData.vehicles
    const starships = apiData.starships

    this.id = this.getIdFromApiUrl(apiData.url) ?? 0
    this.name = apiData.name
    this.height = this.convertStringToNumber(apiData.height)
    this.mass = this.convertStringToNumber(apiData.mass)
    this.hairColor = apiData.hair_color
    this.skinColor = apiData.skin_color
    this.eyeColor = apiData.eye_color
    this.birthYear = apiData.birth_year
    this.gender = apiData.gender
    if (homeworld && autoload) {
      apiLoader
        .fetchPlanetById(this.getIdFromApiUrl(apiData.homeworld) ?? 0, false)
        .then((planet) => (this.homeworld = planet))
    }

    if (films && autoload) {
      films.forEach(async (filmUri) => {
        const id = this.getIdFromApiUrl(filmUri)
        if (!id) return
        const film = await apiLoader.fetchFilmById(id, false)
        this.films.push(film)
      })
    }

    if (species && autoload) {
      species.forEach(async (speciesUri) => {
        const id = this.getIdFromApiUrl(speciesUri)
        if (!id) return
        const species = await apiLoader.fetchSpeciesById(id, false)
        this.species.push(species)
      })
    }

    if (vehicles && autoload) {
      vehicles.forEach(async (vehiclesUri) => {
        const id = this.getIdFromApiUrl(vehiclesUri)
        if (!id) return
        const vehicle = await apiLoader.fetchVehicleById(id, false)
        this.vehicles.push(vehicle)
      })
    }
    
    if (starships && autoload) {
      starships.forEach(async (starshipsUri) => {
        const id = this.getIdFromApiUrl(starshipsUri)
        if (!id) return
        const starship = await apiLoader.fetchStarshipById(id, false)
        this.starships.push(starship)
      })
    }


    this.created = new Date(apiData.created)
    this.edited = new Date(apiData.edited)
    this.url = apiData.url
  }

  getLabel(key: string): string {
    const labels = {
      name: 'Name',
      height: 'Height',
      mass: 'Mass',
      hairColor: 'Hair color',
      skinColor: 'Skin color',
      eyeColor: 'Eye color',
      birthYear: 'Birth year',
      gender: 'Gender',
      homeworld: 'Homeworld',
      films: 'Films',
      species: 'Species',
      vehicles: 'Vehicles',
      starships: 'Starships',
      url: 'API-Uri'
    }
    return labels[key]
  }

  toString() {
    return this.name
  }

  getDetailLink(): string {
    return '/people/' + this.id
  }

  format(key: string): string {
    switch (key) {
      case 'height':
        return (this.height / 100).toFixed(2) + ' m'
      case 'mass':
        return this.mass + ' kg'
      default:
        return super.format(key)
    }
  }
}
